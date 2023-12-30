import { createClient, groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../client";

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

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program._id}
              href={`/our-programs/${program.slug.current}`}
            >
              <article className="border border-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-200">
                {program.mainImage ? (
                  <Image
                    src={program.mainImage.asset.url}
                    width={800}
                    height={900}
                    alt="Blog"
                    className="block mx-auto rounded-lg md:h-[300px] w-full object-cover"
                  />
                ) : null}

                <div className="space-y-4 p-4">
                  <h2 className="text-2xl mb-2">{program.title}</h2>

                  <p className="text-slate-600 text-sm">{`${program.body[0].children[0].text.substring(
                    0,
                    100
                  )}...`}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
