'use client';
import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons';
import { BellIcon, Share2Icon } from 'lucide-react';
import { BentoCard, BentoGrid as BG } from '@/components/ui/bento-grid';
import { useQuery } from '@tanstack/react-query';
import { Projeto } from '@/types';
import { useEffect } from 'react';

export function BentoGrid() {
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  async function getProjects(): Promise<Projeto[]> {
    const res = await fetch(
      'https://api.github.com/users/andre-vg/repos?&sort=pushed&per_page=100&page=1',
    );
    const data = await res.json();
    return data;
  }

  const getClassname = (inx: number) => {
    if (inx === 0) return 'col-span-3 lg:col-span-3 row-span-2';
    if (inx === 1) return 'col-span-3 lg:col-span-3';
    if (inx === 2) return 'col-span-3 lg:col-span-3';
    if (inx === 3) return 'col-span-3 lg:col-span-2';
    if (inx === 4) return 'col-span-3 lg:col-span-4';
    if (inx === 5) return 'col-span-3 lg:col-span-2';
    if (inx === 6) return 'col-span-3 lg:col-span-4';
    if (inx === 7) return 'col-span-3 lg:col-span-4';
    if (inx === 8) return 'col-span-3 lg:col-span-2';

    return 'col-span-3 lg:col-span-3';
  };

  if (!data) return null;
  let projects = data.map((project: Projeto, idx) => {
    project.description = project.description?.replace(/\n/g, ' ');
    return {
      name: project.name,
      description: project.description?.slice(0, 50) + '...',
      href: project.html_url,
      className: getClassname(idx),
      cta: 'Saiba mais',
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
    };
  });
  

  return (
    <BG className="not-prose text-left">
      {projects.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BG>
  );
}
