import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Iqbal Fauzi — Android Engineer & Kotlin Multiplatform Enthusiast",
  description: "Android Engineer with 7+ years of experience designing, developing, and scaling robust mobile apps. Specializing in Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMP).",
  keywords: [
    "Iqbal Fauzi",
    "Android Engineer",
    "Kotlin Multiplatform",
    "KMP Developer",
    "Jetpack Compose",
    "Mobile Developer",
    "Bandung",
    "Indonesia",
    "Bobobox",
  ],
  authors: [{ name: "Iqbal Fauzi", url: "https://iqbalwork.github.io/" }],
  openGraph: {
    title: "Iqbal Fauzi — Android Engineer & Kotlin Multiplatform Enthusiast",
    description: "7+ years of experience designing, developing, and scaling robust mobile apps with 99% crash-free rates.",
    url: "https://iqbalwork.github.io/",
    siteName: "Iqbal Fauzi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07060b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-kmp-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
