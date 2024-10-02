'use client';
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  Settings,
  SunMoon,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './core/dock';
import { useContext } from 'react';
import { inViewContext } from '../app/[locale]/providers';
import { useTheme } from 'next-themes';
import { useMessages } from 'next-intl';
import { useDisclosure } from '@nextui-org/modal';
import dynamic from 'next/dynamic';
const ModalConfig = dynamic(() => import('./layout/modalConfig'), {
  ssr: false,
});

export function DockNavBar() {
  const { inView } = useContext(inViewContext);
  const { setTheme, theme, resolvedTheme } = useTheme();
  //@ts-ignore
  const messages: IntlMessages = useMessages();
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  const className = 'group-data-[isvisible=true]:!text-primary-200';

  const data = [
    {
      title: 'Home',
      icon: <HomeIcon className={className} />,
      href: '#hero',
    },
    {
      title: 'About',
      icon: <Package className={className} />,
      href: '#about',
    },
    {
      title: 'Components',
      icon: <Component className={className} />,
      href: '#',
    },
    {
      title: 'Activity',
      icon: <Activity className={className} />,
      href: '#',
    },
    {
      title: 'Change Log',
      icon: <ScrollText className={className} />,
      href: '#',
    },
    {
      title: 'Email',
      icon: <Mail className={className} />,
      href: '#',
    },
    {
      title: messages.navbar.settings,
      icon: (
        <Settings className="group-data-[isvisible=true]:!text-primary-500" />
      ),
      onClick: () => {
        onOpen();
      },
      href: '#',
    },
  ];
  return (
    <div className="fixed bottom-4 left-1/2 z-50 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <button
            key={idx}
            className="group/root"
            onClick={
              item.onClick ??
              (item.href === '#'
                ? () => {
                    alert('Under construction');
                  }
                : () => {
                    document
                      .getElementById(item.href.split('#')[1])
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      });
                  })
            }
          >
            <DockItem
              isHighlighted={inView === item.href.split('#')[1]}
              className="group aspect-square rounded-full bg-gray-200 transition-colors duration-500 data-[isvisible=true]/root:!bg-primary-500 dark:bg-neutral-800"
            >
              <DockLabel className='text-md'>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </button>
        ))}
      </Dock>
      <ModalConfig isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
