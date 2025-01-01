"use client";
import { useBash } from "@/lib/utils/bashProvider";
import { useTheme } from "@/lib/utils/themeProvider";
import config from "../../../config.json";
import React, { useEffect } from "react";


import { History } from "@/components/history/History";
import { Input } from "@/components/Input/Input";

const Terminal: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("visitedAt", new Date().toString());
  }, []);

  const { history } = useBash();
  const { theme } = useTheme();

  //   const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history, inputRef]);

  return (
    <div
      className="overflow-y-auto h-full rounded"
      style={{
        borderColor: theme.black,
        padding: config.border ? 16 : 8,
        borderWidth: config.border ? 2 : 0,
      }}
    >
      <div ref={containerRef} className="overflow-y-auto h-full">
        <History history={history} />
        <Input inputRef={inputRef} containerRef={containerRef} />
      </div>
    </div>
  );
};
export default Terminal;
