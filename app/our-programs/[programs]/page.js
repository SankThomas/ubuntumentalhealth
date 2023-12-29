"use client";

import { programs } from "@/lib/data";
import { useState } from "react";

export default function OurPrograms({ params }) {
  const [program, setProgram] = useState(programs);

  const slug = params.programs;

  console.log(slug);

  // useEffect(() => {

  // }, [params]);

  return (
    <>
      <section className="max-width py-20 lg:py-44">
        {/* {params.map((program) => (
          <div key={program.title}>
            <h1>{program.title}</h1>
          </div>
        ))} */}

        <h1>Our Programs</h1>
      </section>
    </>
  );
}
