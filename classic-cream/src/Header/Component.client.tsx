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
    <header className="container h-36 xl:h-40 2xl:h-48 relative z-20">
      <div className="py-8 flex flex-row lg:justify-start gap-4 justify-center">
        <Link className="relative w-[200px] h-[95px] 2xl:w-[255px] 2xl:h-[120px]" href="/">
          <Image
            alt="Classic Cream Logo"
            className="object-cover"
            fill
            src="/api/media/file/CC_LOGO.svg"
          />
        </Link>
        <nav
          className="hidden lg:flex flex-row self-center gap-4
    lg:text-xl xl:text-2xl font-bold"
        >
          <Link href="about">About Us</Link>
          <Link href="variety">Variety</Link>
          <Link href="where-to-buy">Where To Buy</Link>
        </nav>
        <div></div>
        <div
          className="relative hidden lg:block h-[90px] w-[170px]
    xl:h-[100px] xl:w-[200px] 2xl:h-[125px] 2xl:w-[225px]"
        >
          <Image
            alt="Finest Ingredients"
            className="object-cover"
            fill
            src="/api/media/file/Finest_Ingredients.svg"
          />
        </div>
      </div>
      <div
        className="hidden lg:block absolute right-0 top-0 m-auto
    overflow-visible mt-4 lg:h-[150px] lg:w-[250px] xl:h-[175px] xl:w-[275px] 2xl:h-[250px] 2xl:w-[400px]"
      >
        <Image
          className="object-cover overflow-visible"
          fill
          alt="Brownies with a dollop"
          src="/api/media/file/Pumpkin_Spice_usage1.png"
        />
      </div>
    </header>
  )
}
