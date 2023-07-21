import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageWrapper } from "./page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animation Examples",
  description: "Example Animations by Laurie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
