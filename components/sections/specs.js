"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { projectTypes } from "@/lib/project-types";

export default function Specs() {
  const { ref: specsRef, inView: specsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="specs">
      <div className="spec-section">
        <div className="spec-subsection" ref={specsRef}>
          <div className={`work-fields ${specsInView ? "in-view" : ""}`}>
            {projectTypes.map((type) => {
              return (
                <Link
                  href={`/cases?workfield=${type.code}`}
                  key={type.code}
                  className="workfield"
                >
                  <h3>{type.displayNamePl}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
