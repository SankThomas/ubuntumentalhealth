import Members from "./_components/members";
import MobileMembers from "./_components/mobile";

export const metadata = {
  title: "Meet Our Team",
};

export default async function Team() {
  return (
    <section className="max-width px-4 py-32 lg:py-44">
      <h1 className="text-center mb-16">Meet the team</h1>

      <MobileMembers />
      <Members />
    </section>
  );
}
