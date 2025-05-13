import BentoGrid from "./_components/bentoGrid";
import Providers from "./_components/providers";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-900 text-white">
      <div className="container flex h-screen flex-col items-center justify-center gap-12 px-4 py-16">
          <Providers>
            <BentoGrid />
          </Providers>
      </div>
    </main>
  );
}
