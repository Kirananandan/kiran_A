import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiran A — Software Developer",
  description:
    "Portfolio of Kiran A, a software developer focused on React, Next.js and full-stack product development.",
  keywords: ["Kiran A", "Software Developer", "React Developer", "Full-Stack Developer", "Chennai"],
  authors: [{ name: "Kiran A" }],
  openGraph: {
    title: "Kiran A — Software Developer",
    description: "React, Next.js and full-stack product development from Chennai, India.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
