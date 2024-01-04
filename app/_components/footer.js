import React from "react";
import Logo from "./logo";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-width py-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 space-y-4">
          <Logo />

          <p className="text-white/75 text-base">
            Welcome to Ubuntu Mental Health, where we believe in the
            transformative power of unity and interconnectedness.
          </p>

          <div className="mt-4 lg:mt-8">
            <h3 className="text-white text-xl mb-4">
              Connect with us on social media
            </h3>

            <div>
              <ul className="flex items-center justify-start gap-4 flex-wrap">
                <li>
                  <Button asChild variant="ghost">
                    <a href="https://facebook.com">
                      <FacebookIcon />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost">
                    <a href="https://instagram.com">
                      <InstagramIcon />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost">
                    <a href="https://linkedin.com">
                      <LinkedinIcon />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost">
                    <a href="https://youtube.com">
                      <YoutubeIcon />
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-white text-xl">Explore the website</h3>

          <ul className="flex flex-col items-start jsutify-start gap-4 text-white/75">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/our-programs">Our Programs</Link>
            </li>
            <li>
              <Link href="/blog">Our Blog</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/gallery">Our Gallery</Link>
            </li>
            <li>
              <Link href="/our-programs/stories">Stories</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pb-8">
        <p className="text-white">&copy; Ubuntu Mental Health 2024</p>
        <small className="text-white/75">
          This website was built by{" "}
          <a
            href="https://tsbsankara.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            <span className="text-white">Thomas Sankara</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
