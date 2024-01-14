import type { Metadata } from "next";
import "./globals.css";
import "../assets/styles/index.scss";

export const metadata: Metadata = {
  title: "My Portfolio Site",
  description: "My Portfolio Site Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-default-theme">{children}</body>
    </html>
  );
}
