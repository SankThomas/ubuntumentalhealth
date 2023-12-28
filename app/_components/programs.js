import React from "react";
import { programs } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Programs() {
  return (
    <>
      <section className="max-width py-20 px-4">
        <h2 className="text-slate-800 text-3xl lg:text-4xl font-bold mb-8">
          Our programs
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Link
              href={program.href}
              key={index}
              className="border p-4 rounded-lg hover:bg-slate-100 transition space-y-4"
            >
              <Image
                src={program.image}
                width={500}
                height={300}
                alt={program.title}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-slate-700">
                {program.title}
              </h3>
              <p>{`${program.desc.substring(0, 200)}...`}</p>
              <Button variant="destructive" size="lg">
                Continue reading
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
