import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div classNamme="max-width py-20 lg:py-44 flex items-center justify-center text-center md:grid md:grid-cols-2">
        <article>
          <h1 className="text-white">About us</h1>
          <p className="text-white/75">
            Autem iste provident explicabo natus magnam temporibus quasi, maxime
            veritatis perspiciatis libero. Esse voluptas consequuntur, non
            beatae distinctio nostrum voluptatem sapiente ipsum!
          </p>
        </article>

        <article>
          <Image
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About us"
            width={800}
            height={800}
          />
        </article>
      </div>
    </section>
  );
}
