'use client';
import { useTranslations } from "next-intl";
import React, { useTransition } from "react";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex h-full flex-col items-center justify-start rounded-2xl border-2 border-black p-8">
      <h2>{t("title")}</h2>
      <button
        className="mt-4 rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600"
        onClick={() => alert("pt")}
      >
        aa
      </button>
    </div>
  );
}
