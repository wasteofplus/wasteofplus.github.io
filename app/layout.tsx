import "./globals.css";
import { Metadata } from 'next'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wasteof.Plus",
  description: "Browser extension that adds customizable addons to the wasteof.money social media.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
