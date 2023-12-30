import { createClient, groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../client";
import { format } from "date-fns";

export const metadata = {
  title: "Blog",
};

async function getPosts() {
  return createClient(client).fetch(
    groq`*[_type == "post"] {
      title,
      slug,
      body,
      categories,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
      "name": author->name,
    } | order(publishedAt desc)`
  );
}

getPosts();

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <section className="max-width py-20 lg:py-44">
        <h1 className="text-center">Our Blog</h1>

        <div className="mt-16">
          <h2 className="text-3xl mb-8">Latest articles</h2>
          {posts[0] && (
            <Link
              href={`/blog/${posts[0].slug.current}`}
              key={posts[0].slug.current}
            >
              <article className="relative">
                {posts[0].mainImage && (
                  <img
                    src={posts[0].mainImage.asset.url}
                    alt={posts[0].title}
                    loading="lazy"
                    className="h-96 lg:h-[500px] w-full object-cover rounded-3xl"
                  />
                )}
                <div className="absolute bottom-5 px-5 md:w-11/12">
                  <h2 className="text-white font-bold text-3xl lg:text-5xl mb-8">
                    {posts[0].title}
                  </h2>
                  <p className="text-white">{`${posts[0].body[0].children[0].text.substring(
                    0,
                    100
                  )}...`}</p>
                </div>
              </article>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <article className="border border-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-200">
                {post.mainImage ? (
                  <Image
                    src={post.mainImage.asset.url}
                    width={800}
                    height={900}
                    alt="Blog"
                    className="block mx-auto rounded-lg md:h-[300px] w-full object-cover"
                  />
                ) : null}

                <div className="space-y-4 p-4">
                  <h2 className="text-2xl mb-2">{post.title}</h2>
                  <p className="text-xs mb-2">
                    By {post.name} on{" "}
                    {format(new Date(post.publishedAt), "do MMMM yyyy")}
                  </p>
                  <p className="text-slate-600 text-sm">{`${post.body[0].children[0].text.substring(
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
