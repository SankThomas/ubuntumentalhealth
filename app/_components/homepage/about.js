import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 py-20 px-4">
      <article className="space-y-4">
        <h2 className="text-slate-800 text-3xl font-bold">About us</h2>
        <p className="text-slate-900/75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          architecto magni! Rem, hic, voluptates laboriosam saepe illo in
          corrupti minus ea quis natus dolores voluptas architecto corporis,
          eveniet sed culpa temporibus facilis quia itaque! Nemo unde
          consectetur deleniti inventore odio eius, neque distinctio ad non quos
          beatae minima voluptatum facere consequatur blanditiis sequi natus
          quaerat. Optio sint alias tempora est fugiat rem ipsum voluptatum enim
          explicabo, natus sed molestias odit, excepturi nihil similique
          aliquam! Nesciunt officiis enim dolorem maiores maxime.
        </p>
      </article>

      <article>
        <Image
          src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={1600}
          height={800}
          alt="About UMH"
        />
      </article>
    </section>
  );
}
