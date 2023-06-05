import Link from "next/link";
import Image from "next/image";
import Contacts from "./contacts";
import MobileMenu from "./mobile-menu";

const navLinks = [
  {
    id: "aboutCompany",
    path: "/about_company",
    displayName: "О компании",
  },
  {
    id: "projects",
    path: "/cases",
    displayName: "Проекты",
  },
  {
    id: "services",
    path: "/services",
    displayName: "Услуги",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-inherit flex justify-between px-10 md:px-40 py-6">
      <Link href="/" aria-label="Go back home">
        <Image src="/images/kalina_soft_logo.svg" width={90} height={16} alt="" />
      </Link>
      <ul className="hidden lg:flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path} className="mx-12 font-medium">
              {link.displayName}
            </Link>
          </li>
        ))}
        <li>
          <Contacts />
        </li>
      </ul>
      <div className="block lg:hidden">
        <MobileMenu navLinks={navLinks} />
      </div>
    </nav>
  );
}
