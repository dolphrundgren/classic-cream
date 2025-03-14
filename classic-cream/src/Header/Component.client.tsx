'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useContext } from 'react'
import { MenuContext } from '@/providers/Menu'
import Image from 'next/image'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const pathname = usePathname()
  const { menuIsOpen, toggleMenu } = useContext(MenuContext)

  return (
    <header className="container h-48 relative z-20">
      <div className="py-8 flex flex-row lg:justify-start gap-4 justify-center">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>
        <nav className="hidden lg:visible flex flex-row self-center gap-4 text-2xl font-bold">
          <Link href="about">About Us</Link>
          <Link href="variety">Variety</Link>
          <Link href="where-to-buy">Where To Buy</Link>
        </nav>
        <img
          alt="Finest Ingredients"
          width={290}
          height={181}
          decoding="async"
          className="h-[130px] hidden lg:visible"
          src="/api/media/file/Finest_Ingredients.svg"
        />
      </div>
      <div className="hidden lg:visible absolute right-0 top-0 m-auto overflow-visible h-[250px] w-[400px]">
        <Image
          className="object-cover overflow-visible"
          fill
          alt="Brownies with a
    dollop"
          src="/api/media/file/Pumpkin_Spice_usage1.png"
        />
      </div>
    </header>
  )
}
