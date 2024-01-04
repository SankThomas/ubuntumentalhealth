"use client";

import React, { useState } from "react";
import { team } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Mobile() {
  const [members] = useState(team);
  const [value, setValue] = useState(0);

  const { name, role, bio, image, socials } = members[value];

  return (
    <section className="md:hidden">
      <Sheet>
        <div className="grid gap-4 items-start justify-start">
          {members.map((member, index) => (
            <React.Fragment key={index}>
              <SheetTrigger onClick={() => setValue(index)}>
                <Card
                  className={`${
                    value === index && "ring-4 ring-sky-600"
                  } p-6 cursor-pointer hover:bg-slate-100 transition`}
                >
                  <CardDescription className="text-center">
                    <Image
                      src={member.image}
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-slate-200 w-[80px] h-[80px] object-cover block mx-auto mb-4"
                    />
                    <h3 className="text-slate-800 text-base mb-2">
                      {member.name}
                    </h3>

                    {`${member.bio.substring(0, 100)}...`}
                  </CardDescription>
                </Card>
              </SheetTrigger>
            </React.Fragment>
          ))}

          <SheetContent className="w-[90%]">
            <div>
              <Image
                src={image}
                width={1920}
                height={400}
                alt={name}
                className="object-contain w-full h-auto mt-6 mb-4"
              />

              <article className="space-y-4">
                <h2 className="flex flex-wrap gap-2 items-center justify-between text-3xl">
                  {name}{" "}
                  <small className="text-slate-600 inline-block mb-2 text-sm font-normal">
                    {role}
                  </small>
                  <span>
                    <ul className="flex flex-wrap gap-4">
                      {socials.map((link, index) => (
                        <Button key={index} asChild variant="ghost" size="sm">
                          <a href={link.link} target="_blank" rel="noreferrer">
                            {link.icon}
                          </a>
                        </Button>
                      ))}
                    </ul>
                  </span>
                </h2>

                <p className="text-slate-600 text-sm leading-6">{bio}</p>
              </article>
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </section>
  );
}
