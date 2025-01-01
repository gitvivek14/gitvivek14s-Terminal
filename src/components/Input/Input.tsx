import React, { useState, useEffect } from "react";
import { commandExists } from "@/lib/utils/commandExists";
import { useBash } from "@/lib/utils/bashProvider";
import { useTheme } from "@/lib/utils/themeProvider";
import Username from "../username/username";
import { handleTabCompletion } from "@/lib/utils/tabCompletion";

interface InputProps {
  inputRef: React.RefObject<HTMLInputElement | null> 
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const Input:React.FC<InputProps>= ({ inputRef, containerRef }) => {
  const { theme } = useTheme();
  const [value, setValue] = useState("");
  const {
    setCommand,
    history,
    lastCommandIndex,
    setHistory,
    setLastCommandIndex,
    clearHistory,
  } = useBash();
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
  }, [history, containerRef]);
  

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map(({ command }) => command)
      .filter((value: string) => value);

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();

      setValue("");

      setHistory("");

      setLastCommandIndex(0);
    }
    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();

      clearHistory();
    }

    if (event.key === "Tab") {
      event.preventDefault();

      handleTabCompletion(value, setValue);
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();

      setLastCommandIndex(0);

      setCommand(value);

      setValue("");
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!commands.length) {
        return;
      }

      const index: number = lastCommandIndex + 1;

      if (index <= commands.length) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commands.length) {
        return;
      }

      const index: number = lastCommandIndex - 1;

      if (index > 0) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setValue("");
      }
    }
  };

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Username />
      </label>
      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className="focus:outline-none flex-grow"
        aria-label="prompt"
        style={{
          backgroundColor: theme.background,
          color: commandExists(value) || value === "" ? theme.green : theme.red,
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
};