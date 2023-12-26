import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-screen">
      <article>
        <Image
          src="/404.png"
          width={800}
          height={800}
          alt="404 page not found"
        />

        <div className="text-center">
          <Button asChild>
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </article>
    </section>
  );
}
