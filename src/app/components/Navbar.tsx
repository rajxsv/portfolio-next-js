"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-[10rem] flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-20 mt-10 border border-indigo-400 rounded-3xl inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link
          className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
          href="/contact"
        >
          Contact
        </Link>
      </Menu>
    </div>
  );
}
