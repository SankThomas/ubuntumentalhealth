import Brightstar from "./_components/brightstar";
import Ubuntu from "./_components/ubuntu";
import Other from "./_components/other";

export default function Gallery() {
  return (
    <section className="max-width py-20 lg:py-44">
      <h1 className="text-center">Gallery</h1>

      <div className="space-y-12">
        <Brightstar />
        <Ubuntu />
        <Other />
      </div>
    </section>
  );
}
