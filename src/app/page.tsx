"use client";

import { useState } from "react";
import HeaderNav from "@/app/components/HeaderNav";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = () => {
    setActiveMenu((activeMenu) => !activeMenu);
  };
  return (
    <>
      <HeaderNav isMenuOpen={activeMenu} toggleMenu={toggleMenu} />
      {activeMenu ? null : <h1>Hello</h1>}
    </>
  );
}
