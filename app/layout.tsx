import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "400", "500", "700", "900"],
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
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}
