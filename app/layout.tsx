import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مجزوءة الديدكتيك | منصة الأستاذ عبدو",
  description: "منصة تعليمية شاملة لتطوير الممارسة المهنية وتقديم دروس الديدكتيك بأسلوب تفاعلي حديث.",
  icons: {
    icon: "/favicon.ico", // هذا لجعل أيقونة الموقع تظهر (سنتعلم تغييرها لاحقاً)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
