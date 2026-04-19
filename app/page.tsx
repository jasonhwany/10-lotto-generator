"use client";
import AdUnit from "@/components/AdUnit"
import { useState } from "react";

function shuffle(): number[] {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6).sort((a, b) => a - b);
}

function ballColor(n: number) {
  if (n <= 10) return { bg: "bg-yellow-500", text: "text-yellow-50" };
  if (n <= 20) return { bg: "bg-blue-500",   text: "text-blue-50" };
  if (n <= 30) return { bg: "bg-red-500",    text: "text-red-50" };
  if (n <= 40) return { bg: "bg-gray-500",   text: "text-gray-50" };
  return { bg: "bg-emerald-600", text: "text-emerald-50" };
}

export default function LottoGenerator() {
  const [balls, setBalls] = useState<number[]>([]);
  const [bonus, setBonus] = useState<number | null>(null);
  const [history, setHistory] = useState<{ nums: number[]; bonus: number }[]>([]);
  const [rolling, setRolling] = useState(false);

  const generate = () => {
    if (rolling) return;
    setRolling(true);
    setBonus(null);
    let ticks = 0;
    const id = setInterval(() => {
      setBalls(shuffle());
      if (++ticks >= 18) {
        clearInterval(id);
        const final = shuffle();
        const pool = Array.from({ length: 45 }, (_, i) => i + 1).filter(n => !final.includes(n));
        const b = pool[Math.floor(Math.random() * pool.length)];
        setBalls(final);
        setBonus(b);
        setHistory(h => [{ nums: final, bonus: b }, ...h].slice(0, 8));
        setRolling(false);
      }
    }, 65);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="max-w-lg mx-auto pt-10">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎰</div>
          <h1 className="text-3xl font-bold tracking-tight">로또 번호 생성기</h1>
          <p className="text-gray-400 mt-1 text-sm">Lotto Number Generator · 1~45 · 6개 추첨</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6">
          <div className="min-h-20 flex items-center justify-center gap-3 mb-5">
            {balls.length > 0 ? (
              <>
                {balls.map(n => {
                  const c = ballColor(n);
                  return (
                    <div key={n} className={`w-12 h-12 rounded-full ${c.bg} ${c.text} flex items-center justify-center font-bold text-sm shadow-lg select-none`}>
                      {n}
                    </div>
                  );
                })}
              </>
            ) : (
              <p className="text-gray-600 text-sm">아래 버튼을 눌러 번호를 추첨하세요</p>
            )}
          </div>

          {bonus !== null && (
            <div className="flex items-center justify-center gap-3 mb-5 py-3 border-t border-gray-800">
              <span className="text-xs text-gray-500">보너스 번호</span>
              <div className={`w-11 h-11 rounded-full ${ballColor(bonus).bg} ${ballColor(bonus).text} flex items-center justify-center font-bold text-sm shadow`}>
                {bonus}
              </div>
            </div>
          )}

          <button onClick={generate} disabled={rolling}
            className={`w-full font-semibold py-3.5 rounded-xl transition-all text-base ${rolling ? "bg-gray-700 text-gray-400 cursor-wait" : "bg-emerald-500 hover:bg-emerald-400 text-white"}`}>
            {rolling ? "🎲 추첨 중..." : "🎲 번호 추첨"}
          </button>
        </div>

        <div className="mt-4 bg-gray-900 rounded-2xl p-5">
          <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-500">
            {[{ n: 1, label: "1~10", c: "bg-yellow-500" }, { n: 11, label: "11~20", c: "bg-blue-500" }, { n: 21, label: "21~30", c: "bg-red-500" }, { n: 31, label: "31~40", c: "bg-gray-500" }, { n: 41, label: "41~45", c: "bg-emerald-600" }].map(({ label, c }) => (
              <span key={label} className="flex items-center gap-1"><span className={`w-3 h-3 rounded-full ${c} inline-block`} />{label}</span>
            ))}
          </div>

          {history.length > 0 && (
            <>
              <p className="text-xs text-gray-500 mb-2">최근 추첨 이력</p>
              <div className="space-y-2">
                {history.map((row, i) => (
                  <div key={i} className={`flex items-center gap-2 transition-opacity ${i === 0 ? "opacity-100" : "opacity-40"}`}>
                    <span className="text-xs text-gray-600 w-4">{i + 1}</span>
                    <div className="flex gap-1.5">
                      {row.nums.map(n => {
                        const c = ballColor(n);
                        return <div key={n} className={`w-8 h-8 rounded-full ${c.bg} ${c.text} flex items-center justify-center text-xs font-bold`}>{n}</div>;
                      })}
                    </div>
                    <span className="text-xs text-gray-600">+</span>
                    <div className={`w-8 h-8 rounded-full ${ballColor(row.bonus).bg} ${ballColor(row.bonus).text} flex items-center justify-center text-xs font-bold opacity-70`}>{row.bonus}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-600 mt-10">
          <a href="https://moneystom7.com" className="hover:text-gray-400 transition-colors">← MoneyStom7 홈으로</a>
        </p>
      </div>
    </div>
  );
}
