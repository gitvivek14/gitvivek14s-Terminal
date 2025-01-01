"use client"
import React from 'react';
import { useTheme } from '@/lib/utils/themeProvider';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { theme } = useTheme();
const inputRef = React.useRef<HTMLInputElement>(null);  
  const onClickAnywhere = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div
      className="min-w-max text-lg h-full  md:min-w-full md:text-base"
      onClick={onClickAnywhere}
      style={{
        color: theme.foreground,
      }}
    >
      <main
        className="w-full h-full p-2"
        style={{
          background: theme.background,
        }}
        ref={inputRef}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
