import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Primary UI font
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Mono font (for numbers / tables / logs)
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CRM Dashboard",
    template: "%s | CRM Dashboard",
  },
  description:
    "A modern CRM dashboard to manage contacts, sales pipeline, tasks, meetings, and business communications efficiently.",
  keywords: [
    "CRM",
    "Dashboard",
    "Sales Management",
    "Leads",
    "Business Tools",
    "Next.js CRM",
  ],
  authors: [{ name: "Mohannad Ali" }],
  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "CRM Dashboard",
    description:
      "Manage your customers, deals, and team workflow with a powerful CRM dashboard.",
    url: "https://your-domain.com",
    siteName: "CRM Dashboard",
    images: [
      {
        url: "/og-image.png", // لازم تضيف الصورة دي
        width: 1200,
        height: 630,
        alt: "CRM Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable}  font-sans antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
