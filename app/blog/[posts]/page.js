import { createClient, groq } from "next-sanity";
import { client } from "../../../client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function generateMetadata({ params }) {
  const slug = params.posts;

  async function getPost() {
    return createClient(client).fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        "slug": slug.current,
        body,
        "name": author->name,
        "author_image": author->image,
        "author_bio": author->bio,
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

  getPost();

  const post = await getPost(slug);

  return {
    title: post.title,
  };
}

export default async function Page({ params }) {
  const slug = params.posts;

  async function getPost() {
    return createClient(client).fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        "slug": slug.current,
        body,
        "name": author->name,
        "author_image": author->image,
        "author_bio": author->bio,
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

  getPost();

  const post = await getPost(slug);

  return (
    <>
      <section className="py-20 lg:py-44 px-4 max-w-3xl mx-auto">
        <h1 className="text-center">{post.title}</h1>

        <p className="text-center my-4">
          By {post.name}, {format(new Date(post.publishedAt), "do MMMM yyyy")}
        </p>

        <div className="portable-text">
          {post.mainImage ? (
            <Image
              src={post.mainImage.asset.url}
              width={800}
              height={900}
              alt="Blog"
              className="block mx-auto rounded-lg md:h-[300px] w-full object-cover mb-8"
            />
          ) : null}

          <PortableText value={post.body} />

          <Button asChild variant="custom">
            <Link href="/blog" className="mt-8">
              &larr; More blog posts
            </Link>
          </Button>

          <div className="flex flex-col items-center justify-center text-center gap-4 mt-16 bg-[#ececec] p-4 rounded-lg shadow lg:p-8">
            {post.author_image && (
              <article>
                <h3 className="mb-4 text-xl lg:text-2xl">About the author</h3>
                <Image
                  src={urlFor(post.author_image).url()}
                  width={90}
                  height={100}
                  alt={`${post.name}'s profile`}
                  className="rounded-full block mx-auto shadow"
                />
              </article>
            )}

            <article>
              <h3>{post.name}</h3>
              {post.author_bio && <p>{post.author_bio[0].children[0].text}</p>}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
