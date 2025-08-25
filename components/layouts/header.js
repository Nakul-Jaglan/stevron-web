"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar.js";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/about"
    },
    {
      name: "Products",
      link: "/productos",
    },
    {
      name: "Contact Us",
      link: "/contact"
    }
  ];
  return (
    <section className="relative w-full">
      <FloatingNav navItems={navItems} />
    </section>
  );
}
