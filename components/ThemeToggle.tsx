"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ننتظر حتى يتم تحميل الصفحة لتجنب مشاكل العرض بين السيرفر والمتصفح
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // مكان فارغ مؤقت
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-5 left-5 p-3 rounded-full bg-slate-200 dark:bg-slate-800 shadow-lg border-2 border-slate-300 dark:border-slate-600 hover:scale-110 transition-all duration-300 z-50"
      aria-label="تبديل الوضع"
    >
      <span className="text-xl">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}