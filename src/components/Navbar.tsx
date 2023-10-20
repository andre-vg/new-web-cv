import React from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { CgDarkMode } from 'react-icons/cg';
import { BiMoon, BiSun } from 'react-icons/bi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  const handleTheme = () => {
    document.getElementById('theme')?.classList.toggle('dark');
    setIsDark(!isDark);
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
            Hero
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#" aria-current="page">
            Customers
          </a>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="#">
            Integrations
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          onClick={() => handleTheme()}
          variant="bordered"
          isIconOnly
          color="default"
        >
          {isDark ? <BiMoon size="24" /> : <BiSun size="24" />}
        </Button>
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
