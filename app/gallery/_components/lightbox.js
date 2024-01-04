import { Button } from "@/components/ui/button";
import { X, XIcon } from "lucide-react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Lightbox({ photos, title, lightbox, setLightbox }) {
  return (
    <>
      <div className="hidden lg:block fixed top-0 left-0 right-0 bottom-0 bg-black/90 z-[150]">
        <div className="absolute top-4 right-4 z-[160]">
          <Button variant="secondary" onClick={() => setLightbox(false)}>
            <XIcon />
          </Button>
        </div>

        <div className="max-w-sm mx-auto flex items-center justify-center h-screen">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <Card
                    className="pt-6 cursor-pointer"
                    onClick={() => setLightbox(true)}
                  >
                    <CardContent>
                      <Image
                        src={photo.path}
                        width={500}
                        height={400}
                        className="object-contain rounded-lg md:h-[500px] md:w-1/2 mx-auto lg:h-[600px]"
                        alt={title}
                      />
                      <p className="text-center text-sm mt-2 font-semibold">
                        {index + 1} of {photos.length}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
