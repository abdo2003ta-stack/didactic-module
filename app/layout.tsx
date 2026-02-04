import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
// 👇 تأكدنا من كتابة اسم الملف بحرف كبير T ليطابق ملفك
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
      {/* 👇 أجبرنا الخلفية تكون غامقة مباشرة هنا */}
      <body className={`${font.className} bg-slate-950 text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"   /* 👈 هذا هو السر! جعلناه داكناً دائماً */
          enableSystem={false}  /* 👈 ألغينا خيار النظام */
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}