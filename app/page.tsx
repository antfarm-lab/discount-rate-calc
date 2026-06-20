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
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
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
    </main>
  );
}