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
import { BiMoon, BiSun } from 'react-icons/bi';
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
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Nav
      className="fixed bg-transparent font-bold"
      shouldHideOnScroll
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
