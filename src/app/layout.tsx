import "~/styles/globals.css";

import { type Metadata } from "next";
import { Roboto } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import Nav from "./_components/nav";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Paradish",
  description: "One stop solution for all your restaurant's needs",
};

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} bg-background text-foreground mx-auto flex min-h-screen max-w-7xl flex-col antialiased`}
      >
        <TRPCReactProvider>
          <Nav />
          <div className="flex flex-grow items-center justify-center">
            {children}
          </div>
          <ToastContainer stacked theme="dark" position="bottom-right" />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
