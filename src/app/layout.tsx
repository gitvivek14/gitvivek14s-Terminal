import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/utils/themeProvider";
import { BashProvider } from "@/lib/utils/bashProvider";





export const metadata: Metadata = {
  title: "gitvivek14's Terminal",
  description: "Created by gitvivek14",
  viewport: 'initial-scale=1.0, width=device-width',
  icons:{
    icon : "/terminal.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <BashProvider>
          {children}
          </BashProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
