import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const BASE_URL = "https://lotto.moneystom7.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "로또 번호 생성기 — MoneyStom7",
    template: "%s | MoneyStom7",
  },
  description: "행운의 로또 번호를 무작위로 추천. 무료 로또 번호 생성기. Free random lotto number generator. Generate lucky lottery numbers instantly.",
  keywords: ["로또 번호 생성기", "Lotto Number Generator", "무료", "온라인", "계산기", "lotto generator", "lottery numbers", "random number generator", "lucky numbers"],
  authors: [{ name: "MoneyStom7" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "로또 번호 생성기 — MoneyStom7",
    description: "행운의 로또 번호를 무작위로 추천. 무료 로또 번호 생성기.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "로또 번호 생성기 — MoneyStom7",
    description: "행운의 로또 번호를 무작위로 추천. 무료 로또 번호 생성기.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
