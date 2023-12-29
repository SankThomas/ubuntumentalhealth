import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-500 to-pink-500">
        <div className="max-width py-20 lg:py-44 flex flex-col items-center justify-center gap-4 text-center space-y-8">
          <article className="md:max-w-lg space-y-4">
            <h1 className="text-white">About us</h1>
            <p className="text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              reprehenderit est expedita! Tempora facilis adipisci, consectetur
              reiciendis fugit praesentium modi. In quo rem odit quod nemo,
              deserunt dolor maxime eligendi!
            </p>
          </article>

          <article>
            <Image
              src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={800}
              height={800}
              alt="About us image"
            />
          </article>
        </div>
      </section>
    </>
  );
}
