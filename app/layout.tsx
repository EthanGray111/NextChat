/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini 3.0",
  description: "Your personal AI assistant",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "Gemini 3.0",
    statusBarStyle: "default",
  },
  icons: {
    icon: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030da8.png",
    shortcut: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030da8.png",
    apple: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030da8.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}