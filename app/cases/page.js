"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Portfolio from "@/components/sections/portfolio";

import { projectTypes } from "@/lib/project-types";

export default function Cases() {
  const searchParams = useSearchParams();
  const [selectedWorkfields, setSelectedWorkfields] = useState(projectTypes.filter(prType => prType.code === searchParams.get("workfield")));

  const workfieldClickHandler = (type) => {
    const index = selectedWorkfields.map((e) => e.code).indexOf(type.code);
    if (index < 0) {
      setSelectedWorkfields((prev) => [...prev, type]);
    } else {
      const temp = [...selectedWorkfields];
      temp.splice(index, 1);
      setSelectedWorkfields(temp);
    }
  };

  const clearFilter = () => {
    setSelectedWorkfields([]);
  };

  return (
    <div className="page">
      <div className="page-title">
        <h1>Наши проекты</h1>
      </div>
      <div className="workfields-list">
        {projectTypes.map((type) => {
          const isSelected = !!selectedWorkfields.filter(
            (sField) => sField.code === type.code
          ).length;
          return (
            <div
              key={type.code}
              className={`workfield-list-item ${isSelected ? "selected" : ""}`}
              onClick={() => workfieldClickHandler(type)}
            >
              <span>{type.displayNamePl}</span>
            </div>
          );
        })}
        {!!selectedWorkfields.length && (
          <div
            className={`workfield-list-item cancel-button`}
            onClick={clearFilter}
          >
            <Image
              src={`/images/filter_cancel_icon.svg`}
              alt=""
              width={40}
              height={30}
            />
          </div>
        )}
      </div>
      <Portfolio
        selected={selectedWorkfields.reduce(
          (acc, current) => [...acc, ...current.examples],
          []
        )}
      />
    </div>
  );
}
