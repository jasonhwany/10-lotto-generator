import LottoGeneratorClient from "@/components/LottoGeneratorClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "로또 번호 생성기 (Lotto Generator)",
  url: "https://lotto.moneystom7.com",
  description: "행운의 로또 번호를 무작위로 생성하는 무료 도구",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: ["ko", "en"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <Script id="json-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <LottoGeneratorClient />

      <section className="max-w-lg mx-auto mt-16 space-y-10 text-sm text-gray-400 pb-16">
        <div>
          <h2 className="text-white text-base font-semibold mb-3">로또 번호 생성기란?</h2>
          <p>
            로또 번호 생성기는 1부터 45까지의 숫자 중 6개를 무작위로 추첨하고 보너스 번호 1개를
            함께 생성하는 무료 온라인 도구입니다. 매주 토요일 오후 8시 45분에 진행되는
            대한민국 로또 6/45 추첨과 동일한 방식으로 번호를 생성합니다.
            최근 추첨 이력을 8회까지 저장하여 확인할 수 있습니다.
          </p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">로또 번호 색상 의미</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-yellow-500 inline-block flex-shrink-0"></span> <span><strong className="text-gray-300">노란색</strong> — 1~10번</span></li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-500 inline-block flex-shrink-0"></span> <span><strong className="text-gray-300">파란색</strong> — 11~20번</span></li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-red-500 inline-block flex-shrink-0"></span> <span><strong className="text-gray-300">빨간색</strong> — 21~30번</span></li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-gray-500 inline-block flex-shrink-0"></span> <span><strong className="text-gray-300">회색</strong> — 31~40번</span></li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-emerald-600 inline-block flex-shrink-0"></span> <span><strong className="text-gray-300">초록색</strong> — 41~45번</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-300 font-medium">로또 당첨 확률은 얼마인가요?</dt>
              <dd className="mt-1">1등(6개 일치) 확률은 45개 중 6개를 고르는 조합의 수인 1/8,145,060입니다. 약 814만 분의 1의 확률입니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">생성된 번호가 진짜 무작위인가요?</dt>
              <dd className="mt-1">네. 브라우저의 Math.random()을 기반으로 Fisher-Yates 셔플 알고리즘을 사용하여 편향 없이 무작위 번호를 생성합니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">로또는 언제 구매할 수 있나요?</dt>
              <dd className="mt-1">매주 토요일 오후 8시까지 전국 로또 판매점 또는 동행복권 온라인(dhbok.com)에서 구매할 수 있습니다. 1장 1,000원이며 5장까지 자동·수동·혼합 선택이 가능합니다.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
