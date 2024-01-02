import React from "react";
import Image from "next/image";
import { createClient, groq } from "next-sanity";
import { client } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export const metadata = {
  title: "Meet Our Team",
};

async function getTeam() {
  return createClient(client).fetch(
    groq`*[_type == "team"] {
      name,
      position,
      image,
      socials,
      bio
    }`
  );
}

getTeam();

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default async function Team() {
  const members = await getTeam();

  return (
    <section className="max-width px-4 py-32 lg:py-44">
      <div className="space-y-12">
        <h1 className="text-center">Meet the team</h1>

        <section className="grid md:grid-cols-4 gap-8">
          <div className="lg:grid grid-cols-1 gap-4 lg:gap-8">
            {members.map((member) => (
              <Card
                key={member.name}
                className="bg-blue-50 ring-4 ring-blue-700 flex items-center gap-4 hover:cursor-pointer"
              >
                <div>
                  <CardHeader>
                    <Image
                      src={urlFor(member.image).url()}
                      width={100}
                      height={200}
                      alt={member.name}
                      className="rounded-full block mx-auto object-cover"
                    />
                  </CardHeader>

                  <CardDescription className="pb-4">
                    <div className="space-y-2 text-center">
                      <article>
                        <h2 className="text-slate-900 text-base">
                          {member.name}
                        </h2>

                        {/* {member.socials.map((social) => (
                          <Button asChild variant="custom">
                            <a href={social} target="_blank" rel="noreferrer">
                              Socials
                            </a>
                          </Button>
                        ))} */}
                      </article>
                      <p className="text-slate-800/80 text-sm leading-6">
                        {`${member.bio[0].children[0].text.substring(
                          0,
                          64
                        )}...`}
                      </p>
                    </div>
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>

          <div className="md:col-span-3 hidden lg:block">
            {/* <Image
              src={image}
              width={400}
              height={400}
              alt={name}
              className="aspect-ratio object-cover w-full h-[500px] lg:rounded-2xl"
            /> */}
          </div>
        </section>
      </div>
    </section>
  );
}
