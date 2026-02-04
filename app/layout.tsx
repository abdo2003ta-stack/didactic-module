import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
// 👇 تم تعديل هذا السطر ليطابق اسم الملف الموجود في صورك بالضبط
import { ThemeProvider } from "../components/ThemeProvider"; 

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