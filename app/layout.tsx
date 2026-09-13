import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiran A — Software Developer",
  description:
    "Portfolio of Kiran A, a software developer focused on React, Next.js and full-stack product development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
