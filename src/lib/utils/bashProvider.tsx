"use client"
import React, { useCallback, useEffect } from "react";
import * as bin from "../bin";
import { History } from "../../interfaces/index";
import { useTheme } from "./themeProvider";

const isTrackingEnabled = process.env.NEXT_PUBLIC_ENABLE_TRACKING === 'true';

declare global {
  interface Window {
    umami: {
      track: (event: string, data?: Record<string, unknown>) => Promise<void>;
    };
  }
}

// Define the type for bin commands
type BinCommands = {
  [key: string]: (args: string[], ...rest: any[]) => Promise<string> | string;
};

// Cast the imported bin as BinCommands
const binCommands = bin as BinCommands;

interface BashContextType {
  history: History[];
  command: string;
  lastCommandIndex: number;
  setHistory: (output: string) => void;
  setCommand: (command: string) => void;
  setLastCommandIndex: (index: number) => void;
  execute: (command: string) => Promise<void>;
  clearHistory: () => void;
}

const BashContext = React.createContext<BashContextType>({
  history: [],
  command: "",
  lastCommandIndex: 0,
  setHistory: () => { },
  setCommand: () => { },
  setLastCommandIndex: () => { },
  execute: async () => { },
  clearHistory: () => { },
});

interface BashProviderProps {
  children: React.ReactNode;
}

export const useBash = () => React.useContext(BashContext);

export const BashProvider: React.FC<BashProviderProps> = ({ children }) => {
  const [init, setInit] = React.useState(true);
  const [history, _setHistory] = React.useState<History[]>([]);
  const [command, _setCommand] = React.useState<string>('');
  const [lastCommandIndex, _setLastCommandIndex] = React.useState<number>(0);
  const { setTheme } = useTheme();

  const setHistory = useCallback(
    (output: string) => {
      _setHistory((h) => [
        ...h,
        {
          id: h.length,
          date: new Date(),
          command: command.split(' ').slice(1).join(' '),
          output,
        },
      ]);
    },
    [command],
  );

  const setCommand = useCallback((command: string) => {
    _setCommand([Date.now(), command].join(' '));
    setInit(false);
  }, []);

  const clearHistory = useCallback(() => {
    _setHistory([]);
  }, []);

  const setLastCommandIndex = useCallback((index: number) => {
    _setLastCommandIndex(index);
  }, []);

  const execute = useCallback(async () => {
    const [cmd, ...args] = command.split(' ').slice(1);

    if (isTrackingEnabled) {
      window.umami.track(`command - ${cmd}`, {
        args: args.join(' '),
      });
    }

    switch (cmd) {
      case 'theme': {
        const output = await bin.theme(args, setTheme);
        setHistory(output);
        break;
      }

      case 'clear':
        clearHistory();
        break;
      case '':
        setHistory('');
        break;
      default: {
        if (Object.keys(binCommands).indexOf(cmd) === -1) {
          setHistory(`Command not found: ${cmd}. Try 'help' to get started.`);
        } else {
          try {
            const output = await binCommands[cmd](args);
            setHistory(output);
          } catch (error: any) {
            setHistory(error.message);
          }
        }
      }
    }
  }, [command, setTheme, setHistory, clearHistory]);

  useEffect(() => {
    setCommand('start');
  }, [setCommand]);

  useEffect(() => {
    if (!init) {
      execute();
    }
  }, [command, init, execute]);

  return (
    <BashContext.Provider
      value={{
        history,
        command,
        lastCommandIndex,
        setHistory,
        setCommand,
        setLastCommandIndex,
        execute,
        clearHistory
      }}
    >
      {children}
    </BashContext.Provider>
  );
};