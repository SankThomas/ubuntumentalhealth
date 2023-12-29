"use client";

import React, { useState, useEffect } from "react";
import { team } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Team() {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useState(0);

  const { name, image, bio, role, socials } = team[value];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="max-width px-4 py-32 lg:py-44">
      <div className="space-y-12">
        <h1 className="text-center">Meet the team</h1>

        <section className="grid md:grid-cols-4 gap-8">
          <div className="hidden lg:grid grid-cols-1 gap-4 lg:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className={`${
                  value === index && "bg-blue-50 ring-4 ring-blue-700"
                } flex items-center gap-4 hover:cursor-pointer`}
                onClick={() => setValue(index)}
              >
                <div>
                  <CardHeader>
                    <Image
                      src={member.image}
                      width={100}
                      height={200}
                      alt={member.name}
                      className="rounded-full block mx-auto object-cover h-[100px] w-[100px]"
                    />
                  </CardHeader>

                  <CardDescription className="pb-4">
                    <div className="space-y-2 text-center">
                      <h2 className="text-slate-900 text-base">
                        {member.name}
                      </h2>
                      <p className="text-slate-800/80 text-sm leading-6">
                        {`${member.bio.substring(0, 64)}...`}
                      </p>
                    </div>
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>

          <div className="md:col-span-3 hidden lg:block">
            <Image
              src={image}
              width={400}
              height={400}
              alt={name}
              className="aspect-ratio object-cover w-full h-[500px] lg:rounded-2xl"
            />

            <div className="mt-4">
              <article className="flex flex-wrap items-center justify-between">
                <h2 className="text-2xl">{name}</h2>
                <ul className="flex flex-wrap items-center gap-4 mt-4">
                  {socials.map((social, index) => (
                    <li key={index}>
                      <Button asChild variant="custom">
                        <a href={social.link} target="_blank" rel="noreferrer">
                          {social.icon}
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </article>
              <p className="text-sm text-slate-900/75">{role}</p>
              <p className="text-slate-900 mt-4">{bio}</p>
            </div>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <div className="grid grid-cols-1 gap-4 lg:gap-8">
                  {team.map((member, index) => (
                    <Card
                      key={index}
                      className={`${
                        value === index && "bg-blue-50 ring-4 ring-blue-700"
                      } flex items-center gap-4 hover:cursor-pointer`}
                      onClick={() => setValue(index)}
                    >
                      <div>
                        <CardHeader>
                          <Image
                            src={member.image}
                            width={100}
                            height={200}
                            alt={member.name}
                            className="rounded-full block mx-auto object-cover h-[100px] w-[100px]"
                          />
                        </CardHeader>

                        <CardDescription className="pb-4">
                          <div className="space-y-2 text-center">
                            <h2 className="text-slate-900 text-base">
                              {member.name}
                            </h2>
                            <p className="text-slate-800/80 text-sm leading-6">
                              {`${member.bio.substring(0, 64)}...`}
                            </p>
                          </div>
                        </CardDescription>
                      </div>
                    </Card>
                  ))}
                </div>
              </SheetTrigger>

              <SheetContent className="w-full h-full">
                <SheetHeader>
                  <SheetDescription className="text-left">
                    <div className="md:col-span-3">
                      <Image
                        src={image}
                        width={400}
                        height={400}
                        alt={name}
                        className="aspect-ratio object-contain w-full h-[150px]"
                      />

                      <div className="mt-4 space-y-4 lg:space-y-0 text-center">
                        <article className="flex flex-col flex-wrap items-center justify-between">
                          <h2 className="text-2xl">{name}</h2>
                          <ul className="flex flex-wrap items-center gap-4 mt-4">
                            {socials.map((social, index) => (
                              <li key={index}>
                                <Button asChild variant="custom">
                                  <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {social.icon}
                                  </a>
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </article>
                        <p className="text-sm text-slate-900/75">{role}</p>
                        <p className="text-slate-900 mt-4">{bio}</p>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </section>
      </div>
    </section>
  );
}
