import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Life Support Learning",
  description: "Life Support Learning platform powered by Duty Doctors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="brand-mark">
          <div className="brand-title">Life Support Learning</div>
          <div className="brand-sub">Powered by Duty Doctors</div>
        </div>
        <div className="app-main">{children}</div>
      </body>
    </html>
  );
}
