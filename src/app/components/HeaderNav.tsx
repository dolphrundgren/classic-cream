"use client";

import Image from "next/image";

interface HeaderNavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function HeaderNav(props: HeaderNavProps) {
  return (
    <>
      <div
        className={`sticky top-0 p-4 w-full h-[100px] transition-bg ease-in-out ${props.isMenuOpen ? "bg-red-50" : "bg-blue-50"} flex items-center justify-between isMenuOpen:bg-blue-50`}
      >
        <Image
          src="/logos/CC_Logo_2024.png"
          alt="classic_cream_logo"
          width={100}
          height={100}
          className="w-[140px]"
        />
        <svg
          onClick={() => props.toggleMenu()}
          className="lg:hidden"
          width="60"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 10 15 H 50 V 20 H 10 L 10 20" />
          <path d="M 10 25 H 50 V 30 H 10 L 10 30" />
          <path d="M 10 35 H 50 V 40 H 10 L 10 40" />
        </svg>
      </div>
      <nav
        className={`w-full p-4 transition-[height] ease-in-out
    duration-300
    ${props.isMenuOpen ? "h-[calc(100vh-100px)] z-50 opacity-100 bg-red-50" : "bg-blue-50 h-0 -translate-y-10 opacity-0 z-0"}`}
      >
        <ul
          className="flex flex-col h-full items-start justify-between
    w-full pb-[600px]"
        >
          <li>About</li>
          <li>Where to buy</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
