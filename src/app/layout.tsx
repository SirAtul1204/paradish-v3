import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paradish",
  description: "One stop solution for all your restaurant's needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} antialiased bg-background text-foreground max-w-7xl mx-auto flex flex-col min-h-screen`}
      >
        <Nav />
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
