import Image from "next/image";
import Link from "next/link";
import "../../styles/portfolio.css";

import { projects } from "@/lib/projects";
import { projectTypes } from "@/lib/project-types";

const getProjectCategories = (code) => {
  const arr = [];
  projectTypes.forEach((prType) => {
    if (prType.examples.includes(code)) {
      arr.push(prType.displayName);
    }
  });
  return (
    <>
      {arr.map((item, index) => (
        <span key={index} className="project-category">
          {item}
        </span>
      ))}
    </>
  );
};

export default function Portfolio({ selected = [] }) {
  return (
    <div>
      <div className="portfolio-container mb-3">
        {(!!selected.length
          ? projects.filter((project) => selected.includes(project.code))
          : projects
        ).map((project) => {
          return (
            <Link
              key={project.code}
              href={`/cases/${project.code}`}
              className="portfolio-case clickable"
            >
              <div className="portfolio-case-image">
                <Image
                  src={`/images/projects/${project.code}/preview.png`}
                  alt=""
                  width={500}
                  height={20}
                />
                <div className="project-categories">
                  {getProjectCategories(project.code)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
