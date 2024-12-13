'use client';
import { useQuery } from '@tanstack/react-query';
import { Projeto } from '@/types';
import { Image } from '@nextui-org/image';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { AnimatedGroup } from '../core/animated-group';
import { text, title } from '../primitives';
import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';

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
      background: (
        <Image
          removeWrapper
          alt="empty"
          src={`/projects/${project.name.toLowerCase()}.png`}
        />
      ),
    };
  });

  return (
    <AnimatedGroup
      className="grid grid-cols-3 gap-4 p-8"
      preset="scale"
      childArray={
        //sort by description length
        data.sort((a: Projeto, b: Projeto) => {
          if (a.description && b.description) {
            return a.description.length - b.description.length;
          }
          return 0;
        })
      }
    >
      <></>
    </AnimatedGroup>
  );
}
