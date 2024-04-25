import React from 'react';
import {
  Navbar as Nav,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';

import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useTranslations } from 'next-intl';
import { Code, Home, MessageCircleDashed, Moon, Sun, User } from 'lucide-react';
import { ThemeSwitch } from './theme-switch';

export default function Navbar() {
  const t = useTranslations('navbar');

  const menuItems = [
    {
      name: t('home'),
      href: '#Hero',
      icon: <Home size="24" />,
    },
    {
      name: t('about'),
      href: '#about',
      icon: <User size="24" />,
    },
    {
      name: t('projects'),
      href: '#projects',
      icon: <Code size="24" />,
    },
    {
      name: t('contact'),
      href: '#contact',
      icon: <MessageCircleDashed size="24" />,
    },
  ];

  return (
    <Nav>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
		<NavbarItem>
		  <ThemeSwitch />
		  </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
