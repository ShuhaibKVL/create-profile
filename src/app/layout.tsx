import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profile Creation App",
  description: "A profile creation form validation focous on clien-side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
