"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
      <Navbar />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-0 inset-x-0 backdrop-blur-2xl font-extrabold p-5 w-full flex justify-center gap-10 z-50">
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
    </div>
  );
}
