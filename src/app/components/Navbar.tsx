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
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link
          className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
          href="/"
        >
          <MenuItem setActive={setActive} active={active} item="Home">
            😄
          </MenuItem>
        </Link>
        <Link
          className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
          href="/projects"
        >
          <MenuItem setActive={setActive} active={active} item="Projects">
            🛠️
          </MenuItem>
        </Link>
        <Link
          className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
          href="/blogs"
        >
          <MenuItem setActive={setActive} active={active} item="Blogs">
            💭
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

// <header className="flex items-center justify-between p-5 shadow-sm bg-transparent w-full dark:shadow-lg">
//   <div className="flex items-center gap-4">
//     <Link
//       className="text-lg font-medium text-gray-200 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
//       href="/"
//     >
//       Home
//     </Link>
//     <Link
//       className="text-lg font-medium text-gray-50 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
//       href="/projects"
//     >
//       Projects
//     </Link>
//     <Link
//       className="text-lg font-medium text-gray-50 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-300"
//       href="/blogs"
//     >
//       Blogs
//     </Link>
//   </div>
// </header>
