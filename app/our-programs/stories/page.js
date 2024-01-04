import { client } from "@/client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { createClient, groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getStories() {
  return createClient(client).fetch(
    groq`*[_type == "story"]{
      _id,
      title,
      body,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
    }`
  );
}

getStories();

export default async function page() {
  const stories = await getStories();

  return (
    <>
      <div className="max-width py-32 lg:py-44">
        <h2 className="text-3xl lg:text-4xl mb-4 text-center">Stories</h2>

        <Sheet>
          <div className="grid gap-4 sm:grid-cols-2 mt-8">
            {stories.map((story) => (
              <React.Fragment key={story._id}>
                <Card className="p-4 lg:p-6 md:flex md:even:flex-row-reverse">
                  <CardTitle className="md:flex-1">
                    {story.mainImage ? (
                      <Image
                        src={story.mainImage.asset.url}
                        width={150}
                        height={150}
                        alt={story.title}
                        className="block mx-auto rounded-lg object-cover"
                      />
                    ) : null}
                  </CardTitle>

                  <CardDescription className="md:flex-1">
                    <h2 className="text-2xl mb-2">{story.title}</h2>
                    <p className="text-slate-600 text-sm leading-7">
                      {story.body[0].children[0].text}
                    </p>
                  </CardDescription>
                </Card>
              </React.Fragment>
            ))}
          </div>
        </Sheet>

        <ul className="flex items-center justify-center mt-8">
          <li>
            <Button asChild variant="custom">
              <Link href="/our-programs" className="mt-8">
                &larr; Back
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
