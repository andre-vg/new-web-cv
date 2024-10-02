'use client';
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './core/dock';
import { useContext } from 'react';
import { inViewContext } from '../app/[locale]/providers';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#hero',
  },
  {
    title: 'About',
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#about',
  },
  {
    title: 'Components',
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#',
  },
];

export function DockNavBar() {
  const { inView } = useContext(inViewContext);
  return (
    <div className="fixed bottom-4 left-1/2 z-50 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <button
            key={idx}
            className="group/root"
            onClick={
              item.href === '#'
                ? () => {
                    alert('Under construction');
                  }
                : () => {
                    document
                      .getElementById(item.href.split('#')[1])
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      });
                  }
            }
          >
            <DockItem
              isHighlighted={inView === item.href.split('#')[1]}
              className="aspect-square rounded-full bg-gray-200 transition-colors duration-500 data-[isvisible=true]/root:!bg-primary-300 dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </button>
        ))}
      </Dock>
    </div>
  );
}
