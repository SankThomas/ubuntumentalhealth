import { createClient, groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../client";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Programs",
};

async function getPrograms() {
  return createClient(client).fetch(
    groq`*[_type == "program"] {
      title,
      slug,
      body,
      categories,
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

getPrograms();

export default async function Blog() {
  const programs = await getPrograms();

  return (
    <>
      <section className="max-width py-20 lg:py-44">
        <h1 className="text-center">Our Programs</h1>

        <div className="grid grid-cols-1 gap-8 mt-16">
          {programs.map((program) => (
            <Link
              key={program._id}
              href={`/our-programs/${program.slug.current}`}
            >
              <Card className="md:flex items-center justify-center hover:bg-slate-100 transition">
                <CardHeader className="md:flex-1">
                  {program.mainImage ? (
                    <Image
                      src={program.mainImage.asset.url}
                      width={800}
                      height={900}
                      alt="Blog"
                      className="block mx-auto rounded-lg md:h-[300px] w-full object-cover"
                    />
                  ) : null}
                </CardHeader>

                <CardDescription className="px-6 pb-6 md:flex-1">
                  <article>
                    <div className="space-y-4">
                      <h2 className="text-2xl mb-2">{program.title}</h2>

                      <p className="text-slate-600 text-sm md:hidden">{`${program.body[0].children[0].text.substring(
                        0,
                        100
                      )}...`}</p>

                      <p className="text-slate-600 text-sm hidden md:block">{`${program.body[0].children[0].text.substring(
                        0,
                        300
                      )}...`}</p>

                      <Button asChild variant="ghost">
                        <Link href={`/our-programs/${program.slug.current}`}>
                          Read More &rarr;
                        </Link>
                      </Button>
                    </div>
                  </article>
                </CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
