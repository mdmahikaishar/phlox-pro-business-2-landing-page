import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/app.scss";

export const metadata: Metadata = {
  title: "Phlox Pro Business 2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}