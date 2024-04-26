"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMail, IconInfoCircle } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Ana Sayfa",
      link: "/",
      icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Hakkımızda",
      link: "/about",
      icon: <IconInfoCircle className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "İletişim",
      link: "/contact",
      icon: (
        <IconMail className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}