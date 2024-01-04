"use client";

import React, { useState } from "react";
import { team } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";

export default function Members() {
  const [members] = useState(team);
  const [value, setValue] = useState(0);

  const { name, role, bio, image, socials } = members[value];

  return (
    <section className="hidden md:grid grid-cols-3 gap-8">
      <div className="grid gap-4 items-start justify-start">
        {/* Left side */}
        {members.map((member, index) => (
          <Card
            key={index}
            className={`${
              value === index && "ring-4 ring-sky-600"
            } p-6 cursor-pointer hover:bg-slate-100 transition`}
            onClick={() => {
              setValue(index);
            }}
          >
            <CardDescription className="text-center">
              <Image
                src={member.image}
                width={80}
                height={80}
                className={`${
                  value === index && "border-sky-600"
                } rounded-full border-4 border-slate-200 w-[80px] h-[80px] object-cover block mx-auto mb-4`}
              />
              <h3 className="text-slate-800 text-base mb-2">{member.name}</h3>

              {`${member.bio.substring(0, 100)}...`}
            </CardDescription>
          </Card>
        ))}
      </div>

      <div className="col-span-2">
        {/* Right side */}
        <Image
          src={image}
          width={1920}
          height={400}
          alt={name}
          className="object-contain w-full h-[400px]"
        />

        <article className="space-y-4 mt-8">
          <h2 className="flex items-center justify-between text-3xl">
            {name}{" "}
            <span>
              <ul className="flex gap-4">
                {socials.map((link, index) => (
                  <Button key={index} asChild variant="custom">
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </ul>
            </span>
          </h2>
          <small className="text-slate-600">{role}</small>
          <p className="text-slate-600">{bio}</p>
        </article>
      </div>
    </section>
  );
}
