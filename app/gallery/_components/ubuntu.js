import { Oswald } from "next/font/google";
import Photos from "./Photos";

const oswald = Oswald({ subsets: ["latin"], weight: ["600"] });

const ubuntuphotos = [
  {
    path: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1655185497004-f3018eab9cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1655185497013-db98aca061d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1655185497004-f3018eab9cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1655185497013-db98aca061d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1655185497004-f3018eab9cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1655185497013-db98aca061d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
];

export default function Ubuntu() {
  return (
    <>
      <div>
        <h2 className={`text-3xl mb-4`}>Ubuntu Mental Health Circles</h2>
        <Photos photos={ubuntuphotos} title="Ubuntu Mental Health" />
      </div>
    </>
  );
}
