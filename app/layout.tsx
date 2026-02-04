import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
// استدعاء المكون بالاسم الصحيح كما يظهر في مجلدك
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
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}