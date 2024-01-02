import Photos from "./Photos";

const brightstarPhotos = [
  {
    path: "/brightstar/brightstar-1.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-2.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-3.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-4.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-5.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-6.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-7.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-8.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-9.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-10.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-11.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-12.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-13.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-14.jpeg",
    description: "Some descriptive text about the photo",
  },
  {
    path: "/brightstar/brightstar-15.jpeg",
    description: "Some descriptive text about the photo",
  },
];

export default function Brightstar() {
  return (
    <>
      <div>
        <h2 className="text-3xl mb-4">The Bright Star Initiative</h2>
        <Photos photos={brightstarPhotos} title="Brightstar Initiative" />
      </div>
    </>
  );
}
