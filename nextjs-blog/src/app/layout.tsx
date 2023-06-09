import { ReactNode } from "react";
import "./globals.css";
import { Economica } from "next/font/google";

const Economicafont = Economica({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={Economicafont.className}>{children}</body>
    </html>
  );
}
