import type { Metadata } from "next";
import { Cairo } from "next/font/google"; // أو الخط الذي تستخدمه
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // 👈 استدعاء المزود

const font = Cairo({ subsets: ["latin"] }); // تأكد من اسم الخط عندك

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
      {/* 👆 suppressHydrationWarning مهمة جداً لمنع أخطاء الثيم */}
      <body className={`${font.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        {/* 👇 هنا نغلف التطبيق بالمزود */}
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