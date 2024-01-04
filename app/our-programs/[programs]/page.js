import { createClient, groq } from "next-sanity";
import { client } from "../../../client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function generateMetadata({ params }) {
  const slug = params.programs;

  async function getProgram() {
    return createClient(client).fetch(
      groq`*[_type == "program" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
      }`,
      { slug }
    );
  }

  getProgram();

  const program = await getProgram(slug);

  return {
    title: program.title,
  };
}

export default async function Page({ params }) {
  const slug = params.programs;

  async function getProgram() {
    return createClient(client).fetch(
      groq`*[_type == "program" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
      }`,
      { slug }
    );
  }

  getProgram();

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

  const program = await getProgram(slug);

  const stories = await getStories();

  return (
    <>
      <section className="max-w-3xl mx-auto py-20 lg:pt-44">
        <h1 className="text-center mb-16">{program.title}</h1>

        <div className="portable-text">
          {program.mainImage ? (
            <Image
              src={program.mainImage.asset.url}
              width={800}
              height={900}
              alt="Blog"
              className="block mx-auto rounded-lg md:h-[600px] w-full object-contain mb-8"
            />
          ) : null}

          <PortableText value={program.body} />
        </div>
      </section>

      <div className="max-width pb-32">
        <h2 className="text-3xl lg:text-4xl mb-4 text-center">Stories</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {stories.map((story) => (
            <Card
              key={story._id}
              className="p-4 lg:p-6 md:flex md:even:flex-row-reverse"
            >
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
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <li>
            <Button asChild variant="ghost">
              <Link href="/our-programs">&larr; Back</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="custom">
              <Link href="/our-programs/stories">All Stories &rarr;</Link>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
