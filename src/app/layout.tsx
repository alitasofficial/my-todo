import "@/styles/globals.css";

import { Inter } from "next/font/google";

import Providers from "@/components/providers";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Providers session={null}>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
