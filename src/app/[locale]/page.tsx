import { useTranslations } from 'next-intl';
const Typer = dynamic(() => import('@/src/components/Home/typer'));
import dynamic from 'next/dynamic';
export default function Home() {
  const t = useTranslations('hero');
  const phases = [t('adj.1'), t('adj.2'), t('adj.3'), t('adj.4'), t('adj.5')];
  return (
    <section>
      {/* @ts-ignore */}
      <Typer phrases={phases} />
    </section>
  );
}
