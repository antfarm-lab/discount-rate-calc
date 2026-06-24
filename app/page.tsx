"use client";

import { useState } from "react";

export default function Home() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const original = Number(originalPrice) || 0;
  const discounted = Number(discountedPrice) || 0;

  const savedAmount = original - discounted;
  const discountRate =
    original > 0 ? ((original - discounted) / original) * 100 : 0;

  const reset = () => {
    setOriginalPrice("");
    setDiscountedPrice("");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
     <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="mb-2 text-2xl font-bold">割引率計算ツール</h1>
        <p className="mb-6 text-sm text-gray-600">
          元値と割引後価格から、割引額と割引率を計算します。
        </p>

        <div className="space-y-4">
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="元値（例：5000）"
            className="w-full rounded border p-3"
          />

          <input
            type="number"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
            placeholder="割引後価格（例：3500）"
            className="w-full rounded border p-3"
          />
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">安くなった金額</p>
          <p className="text-3xl font-bold">
            {savedAmount.toLocaleString()}円
          </p>

          <p className="mt-4 text-sm text-gray-600">割引率</p>
          <p className="text-2xl font-bold">
            {discountRate.toFixed(1)}% OFF
          </p>
        </div>

        <button
          onClick={reset}
          className="mt-6 w-full rounded bg-black py-3 font-bold text-white"
        >
          リセット
        </button>
      </div>
      <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    割引率を正確に計算することが重要な理由
  </h2>

  <p className="mb-3">
    セール販売や値下げ販売では、感覚ではなく正確な割引率を把握することが重要です。
    小さな計算ミスが利益減少につながります。
  </p>

  <p className="mb-3">
    特に物販では値下げ後の価格設定によって利益率が大きく変わるため、
    事前計算が必要になります。
  </p>

  <p>
    この割引率計算ツールでは元の価格と販売価格から
    割引率を自動計算できます。
  </p>
</section>
      <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm text-blue-600 underline">
    <a href="https://calc-tools-mauve.vercel.app/">
      メルカリ・Amazon・ラクマ利益計算ツール
    </a>
    <a href="https://shipping-calc-olive.vercel.app/">
      メルカリ送料計算ツール
    </a>
    <a href="https://price-reverse-calc.vercel.app/">
      利益から販売価格を逆算するツール
    </a>
    <a href="https://fee-calc-seven.vercel.app/">
      メルカリ販売手数料計算ツール
    </a>
    <a href="https://profit-rate-calc.vercel.app/">
      メルカリ利益率計算ツール
    </a>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon販売手数料計算ツール
    </a>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI（投資利益率）計算ツール
    </a>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </div>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}