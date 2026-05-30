import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Polish National Baseball Team",
  description: "Representing Poland on the international baseball stage. Home of the Polish National Baseball Program — Senior, U23, and U18 teams competing across Europe.",
  openGraph: {
    title: "Polish National Baseball Team",
    description: "Representing Poland on the international baseball stage.",
    url: "https://polskabaseball.com",
    siteName: "Polish National Baseball Team",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polish National Baseball Team",
    description: "Representing Poland on the international baseball stage.",
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
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F5F5F5]">
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
