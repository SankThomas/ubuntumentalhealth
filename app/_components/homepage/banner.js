import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="showcase">
      <div className="relative z-50 bg-black/50 flex items-center justify-center text-center h-screen">
        <article className="space-y-8">
          <h1 className="text-4xl lg:text-6xl 2xl:text-8xl text-white font-bold">
            Ubuntu Mental Health
          </h1>
          <p className="lg:w-1/2 mx-auto text-white/75 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sit ducimus quaerat numquam quibusdam ipsam qui minus quod
            voluptates perspiciatis?
          </p>

          <Button variant="outline">Meet the team</Button>
        </article>
      </div>

      <div className="hidden lg:block absolute -bottom-20 lg:bottom-0 right-0 w-full">
        <Image src="/banner.png" width={2560} height={1080} alt="Banner" />
      </div>
    </section>
  );
}
