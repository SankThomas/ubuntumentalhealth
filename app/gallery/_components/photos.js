"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Lightbox from "./lightbox";

export default function Photos({ photos, title }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="lg:basis-1/2 2xl:basis-1/3">
            <Card
              className="pt-6 cursor-pointer"
              onClick={() => setLightbox(true)}
            >
              <CardContent>
                <Image
                  src={photo.path}
                  width={500}
                  height={400}
                  className="object-cover rounded-lg w-full md:h-[400px]"
                  alt={title}
                />
                <p className="text-center text-sm mt-2 font-semibold">
                  {index + 1} of {photos.length}
                </p>

                {/* {photo.description && (
                  <p className="text-sm text-slate-900/75">
                    {photo.description}
                  </p>
                )} */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />

      {lightbox && (
        <Lightbox
          title={title}
          photos={photos}
          lightbox={lightbox}
          setLightbox={setLightbox}
        />
      )}
    </Carousel>
  );
}
