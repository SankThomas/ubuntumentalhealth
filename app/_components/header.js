"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import SocialIcons from "./socialIcons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "/about-us",
  },
  {
    title: "Our programs",
    href: "/our-programs",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Meet the Team",
    href: "/team",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="lg:absolute z-[99] lg:w-full lg:bg-slate-900">
      <div className="max-width flex items-center justify-between gap-4 py-4">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="lg:hidden">
                <MenuIcon className="text-2xl text-slate-800 cursor-pointer" />
              </button>

              <button className="hidden lg:block hover:scale-110 transition">
                <Image
                  src="/logo.png"
                  width={60}
                  height={60}
                  alt="Ubuntu Mental Health Logo"
                />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-2/3 sm:w-[400px] z-[100]">
              <SheetHeader className="space-y-12">
                <SheetTitle>
                  <Image
                    src="/logo.png"
                    width={60}
                    height={60}
                    alt="Ubuntu Mental Health Logo"
                    className="block mx-auto lg:inline"
                  />
                </SheetTitle>
                <SheetDescription>
                  <Navbar items={links} />
                </SheetDescription>

                <SheetDescription>
                  <SocialIcons />
                </SheetDescription>

                <SheetDescription>
                  <div>&copy; Ubuntu Mental Health 2024</div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div>
          <Logo />
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4">
          <nav>
            <ul className="flex items-center gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`text-white border-b-2 border-transparent pb-2 ${
                      pathname === link.href && "active"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
