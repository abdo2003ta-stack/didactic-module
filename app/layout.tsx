import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
// 👇 تم تصحيح الاسم هنا ليطابق اسم الملف عندك (ThemeProvider)
import { ThemeProvider } from "@/components/ThemeProvider"; 

const font = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "مجزوءة الديدكتيك",
  description: "منصة تعليمية للممارسة المهنية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      {/* 👇 تم إضافة الألوان هنا لتشغيل الوضع الليلي */}
      <body className={`${font.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}