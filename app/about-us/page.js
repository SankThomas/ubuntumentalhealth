import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-700 to-pink-700">
        <div className="max-w-4xl mx-auto py-20 lg:py-44 flex flex-col items-center justify-center gap-4 text-center space-y-8">
          <article className="space-y-4">
            <h1 className="text-white">About us</h1>

            <p className="text-white/80">
              Welcome to Ubuntu Mental Health, where we believe in the
              transformative power of unity and interconnectedness. "Ubuntu" is
              more than just a name for us; it is a philosophy that encompasses
              the essence of community and shared humanity. Derived from an
              African proverb, Ubuntu translates to "I am because we are,"
              emphasizing the importance of collective well-being.
            </p>
            <p className="text-white/80">
              In every program we offer, Ubuntu Mental Health integrates the
              principles of mental well-being and environmental responsibility.
              We believe that a healthy mind thrives in a healthy environment,
              and vice versa. Our initiatives are designed to create a
              harmonious balance between individual mental wellness and
              ecological mindfulness.
            </p>
            <p className="text-white/80">
              Central to our mission are the Mental Health Circles that form the
              core of our programs, as exhibited by The Bright Star Initiative.
              These circles provide a safe and supportive space for individuals
              to share their experiences, challenges, and triumphs on their
              mental health journey. We believe in the power of collective
              understanding, fostering empathy, and breaking the stigma
              surrounding mental health.
            </p>
            <p className="text-white/80">
              Our awareness programs extend beyond the individual, reaching out
              to communities and beyond. We strive to create a society that is
              not only mentally resilient but also environmentally conscious.
              Through workshops, campaigns, and collaborative initiatives, we
              aim to promote mental health awareness and sustainable practices.
            </p>
            <p className="text-white/80">
              Join us on this journey towards holistic well-being. Whether you
              are seeking support for your mental health or looking to
              contribute to a more sustainable world, we are here for you.
              Together, let's build a community that embraces Ubuntu - where the
              well-being of each individual is intertwined with the well-being
              of all.
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
