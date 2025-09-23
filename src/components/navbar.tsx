"use client";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "./ui/dock";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { redirect, usePathname } from "~/i18n/navigation";

export function Navbar() {
  const t = useTranslations("Navbar");
  const data = [
    {
      title: t("Home"),
      icon: (
        <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: t("About"),
      icon: (
        <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: t("Projects"),
      icon: (
        <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: t("Contact"),
      icon: (
        <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: changeLanguage,
    },
    {
      title: t("Theme"),
      icon: (
        <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => {
        setTheme(theme === "light" ? "dark" : "light");
      },
    },
  ];

  const { theme, setTheme } = useTheme();

  const locale = useLocale();
  function changeLanguage() {
    if (locale === "en") {
      redirect({ href: "/", locale: "pt" });
    } else {
      redirect({ href: "/", locale: "en" });
    }
  }

  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3 dark:bg-neutral-800">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square cursor-pointer rounded-full bg-gray-200 dark:bg-neutral-700"
            onClick={item.onClick}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
