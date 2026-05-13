
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "CodeCast — Turn Your GitHub Into a Portfolio",
  description:
    "Paste your GitHub username and get a beautiful, AI-generated portfolio site in under 2 minutes.",
  openGraph: {
    title: "CodeCast — Turn Your GitHub Into a Portfolio",
    description:
      "AI-powered portfolio generator that transforms your GitHub profile into a stunning developer portfolio.",
    url: "https://codecast.dev",
    siteName: "CodeCast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A2E",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#FFFFFF",
            },
          }}
        />
      </body>
    </html>
  );
}

