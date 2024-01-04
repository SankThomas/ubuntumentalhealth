import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="showcase">
      <div className="relative z-50 bg-black/35 flex items-center justify-center text-center h-screen">
        <article className="space-y-8">
          <h1 className="text-white">Ubuntu Mental Health</h1>
          <p className="lg:w-1/2 mx-auto text-white/75 lg:text-xl">
            Welcome to Ubuntu Mental Health, where we believe in the
            transformative power of unity and interconnectedness.
          </p>

          <ul className="flex items-center justify-center gap-4 flex-wrap">
            <li>
              <Button asChild variant="secondary">
                <Link href="/about-us">About Us</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="custom">
                <Link href="/team">Meet the team</Link>
              </Button>
            </li>
          </ul>
        </article>
      </div>

      {/* <div className="hidden lg:block absolute -bottom-20 lg:bottom-0 right-0 left-0 w-full">
        <Image
          src="/banner.png"
          width={2560}
          height={1080}
          alt="Banner"
          className="w-full"
        />
      </div> */}
    </section>
  );
}
