import type { Metadata } from "next";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Flex, Theme } from "@radix-ui/themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Joe Bloxsome",
  description: "Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Theme>
          <Flex justify="center">{children}</Flex>
        </Theme>
      </body>
    </html>
  );
}
