import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "로또 번호 생성기 — MoneyStom7",
  description: "행운의 로또 번호(1-45)를 무작위로 추천해드립니다.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body></html>;
}
