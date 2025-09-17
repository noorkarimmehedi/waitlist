import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  //description: siteConfig.description,
  keywords: [
    "Design",
    "Technology",
    "Design Engineer",
  ],
  authors: [
    {
      name: "Operal",
      url: "https://kaarim.com",
    },
  ],
  creator: "Operal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    //description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    //description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kaarim",
  },
  icons: {
    icon: "/a-new-adventure-favicon.svg",
    shortcut: "/a-new-adventure-favicon.svg",
    apple: "/a-new-adventure-favicon.svg",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
