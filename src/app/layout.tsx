import "@/styles/globals.css";

import { Inter } from "next/font/google";

import AuthProvider from "@/components/providers/auth-provider";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "My Todo",
  description: "A simple todo app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <AuthProvider>{children}</AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
