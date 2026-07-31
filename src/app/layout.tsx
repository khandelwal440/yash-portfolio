import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Portfolio",
  description: "Portfolio website for a full stack developer showcasing projects, skills, experience, and contact.",
  openGraph: {
    title: "Yash Portfolio",
    description: "Project-focused portfolio with a full-stack contact API.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
