import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ai App Factory",
  description: "Imported from existing codebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
