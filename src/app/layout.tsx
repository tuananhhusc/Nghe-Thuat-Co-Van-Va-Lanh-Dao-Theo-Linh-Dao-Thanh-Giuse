import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nghệ Thuật Cố Vấn & Lãnh Đạo | Báo Cáo Linh Đạo Thánh Giuse",
  description:
    "Phân tích chuyên sâu về nghệ thuật cố vấn và lãnh đạo thực tiễn theo linh đạo Thánh Giuse. Khám phá các nhân đức thầm lặng, lòng can đảm sáng tạo và tình yêu khiết tịnh trong quản trị hiện đại.",
  keywords: [
    "Thanh Giuse",
    "Co van",
    "Lanh dao",
    "Linh dao Thanh Giuse",
    "Patris Corde",
    "Redemptoris Custos",
    "Josephite Mentorship",
    "Cong giao",
    "Quan tri Cong giao",
    "Leadership Coaching",
  ],
  authors: [{ name: "Báo Cáo Nghiên Cứu Thần Học & Quản Trị" }],
  openGraph: {
    title: "Nghệ Thuật Cố Vấn & Lãnh Đạo Theo Linh Đạo Thánh Giuse",
    description:
      "Mô hình cố vấn nhân bản và thiêng liêng dựa trên hình mẫu Thánh Giuse cho kỷ nguyên hiện đại.",
    type: "article",
    locale: "vi_VN",
    siteName: "Nghệ Thuật Cố Vấn Giuse",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lora.variable} font-serif antialiased bg-cream dark:bg-navy text-navy dark:text-cream transition-colors duration-300`}
      >
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
