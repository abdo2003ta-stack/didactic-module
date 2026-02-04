import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
// 1. استيراد المكون الذي أنشأناه
import { ThemeProvider } from "@/components/ThemeProvider";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "مجزوءة الديدكتيك | منصة الأستاذ عبدو",
  description: "منصة تعليمية شاملة لتطوير الممارسة المهنية وتقديم دروس الديدكتيك بأسلوب تفاعلي حديث.",
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
    // 2. إضافة suppressHydrationWarning لمنع أخطاء التوافق
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        {/* 3. تغليف المحتوى بـ ThemeProvider */}
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