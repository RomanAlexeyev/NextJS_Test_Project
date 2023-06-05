"use client";

import { useState } from "react";
import Link from "next/link";
import Contacts from "./contacts";

export default function MobileMenu({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex flex-col justify-between h-4 w-6 cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-6 h-px bg-slate-950 ${
            isOpen
              ? "absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 rotate-45"
              : ""
          }`}
        />
        <span
          className={`w-6 h-px bg-slate-950 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-px bg-slate-950 ${
            isOpen
              ? "absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 -rotate-45"
              : ""
          }`}
        />
      </div>
      {isOpen && (
        <ul className="absolute top-10 left-0 w-full bg-background-color flex flex-col items-center mt-5 z-60 py-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.path} className="py-3 font-medium align-center" onClick={() => setIsOpen(false)}>
                {link.displayName}
              </Link>
            </li>
          ))}
          <li>
            <Contacts isMobile={true} />
          </li>
        </ul>
      )}
    </div>
  );
}
