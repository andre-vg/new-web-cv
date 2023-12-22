import React from 'react';
import {
  Navbar as Nav,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import {
  BiCodeAlt,
  BiHomeAlt2,
  BiMessageDots,
  BiMoon,
  BiSun,
  BiUser,
} from 'react-icons/bi';
import I18n from './i18n/I18n';
import { useTheme } from 'next-themes';
import Translator from '../i18n/Translator';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(
    localStorage.getItem('theme') === 'dark',
  );
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const menuItems = [
    {
      name: <Translator path="navbar.home" />,
      href: '#Hero',
      icon: <BiHomeAlt2 size="24" />,
    },
    {
      name: <Translator path="navbar.about" />,
      href: '#about',
      icon: <BiUser size="24" />,
    },
    {
      name: <Translator path="navbar.projects" />,
      href: '#projects',
      icon: <BiCodeAlt size="24" />,
    },
    {
      name: <Translator path="navbar.contact" />,
      href: '#contact',
      icon: <BiMessageDots size="24" />,
    },
  ];

  return (
    <Nav
      className="fixed bg-transparent font-bold"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden gap-12 sm:flex" justify="start">
        <NavbarItem>
          <a color="foreground" href="#Hero">
            <Translator path="navbar.home" />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about">
            <Translator path="navbar.about" />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#projects">
            <Translator path="navbar.projects" />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact">
            <Translator path="navbar.contact" />
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
        <Button
          onClick={() => handleTheme()}
          variant="bordered"
          isIconOnly
          color="default"
        >
          {!isDark ? <BiMoon size="24" /> : <BiSun size="24" />}
        </Button>
        <I18n />
      </NavbarContent>
      <NavbarMenu className="gap-8 bg-white bg-opacity-20 dark:bg-opacity-20 pt-8 backdrop-blur-lg dark:bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            isActive={window.location.href.includes(item.href)}
            key={`${item}-${index}`}
            className="text-4xl"
          >
            <Link
              className="flex w-full items-center justify-normal gap-4 text-4xl"
              href={item.href}
              size="lg"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              color="foreground"
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
