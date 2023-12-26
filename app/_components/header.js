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

export default function Header() {
  return (
    <header className="lg:fixed lg:w-full">
      <div className="max-width lg:flex lg:items-center lg:justify-between gap-4 py-4">
        <Sheet>
          <SheetTrigger>
            <button className="lg:hidden">
              <MenuIcon className="text-2xl text-white cursor-pointer" />
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

          <SheetContent side="left" className="w-full">
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
                <Navbar />
              </SheetDescription>

              <SheetDescription>
                <SocialIcons />
                <p className="mt-12">
                  Hapa kutakuwa na some other options / items. For now inashow
                  tu other links.
                </p>
              </SheetDescription>

              <SheetDescription>
                <div>&copy; Ubuntu Mental Health 2024</div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex items-center justify-between gap-4">
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <button className="text-white border-b-2 border-white pb-2">
                  Home
                </button>
              </li>
              <li>
                <button className="text-white border-b-2 border-transparent pb-2">
                  About
                </button>
              </li>
              <li>
                <button className="text-white border-b-2 border-transparent pb-2">
                  Contacts
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}