"use client";

import { useState } from "react";
import { BookText, Cloud, CodeXml, Home, Settings } from "lucide-react";

import SidebarItem from "./sidebar-item";

const routes = [
  {
    icon: Home,
    label: "Repositories",
    href: "#",
  },
  {
    icon: CodeXml,
    label: "AI Code Review",
    href: "#",
  },
  {
    icon: Cloud,
    label: "Cloud Security",
    href: "#",
  },
  {
    icon: BookText,
    label: "How to Use",
    href: "#",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "#",
  },
];

const SidebarRoutes = () => {
  const [active, setActive] = useState<string>("Repositories");

  return (
    <div className="flex flex-col w-full px-4 gap-1">
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          active={active}
          setActive={setActive}
          label={route.label}
          icon={route.icon}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
