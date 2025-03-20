'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useContext } from 'react'
import { MenuContext } from '@/providers/Menu'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import type { Header } from '@/payload-types'
import Message from '@/app/(frontend)/[slug]/message.client'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

const Contact = (props: any) => {
  return (
    <div
      className="bg-blue-500 bg-opacity-75 top-0 bottom-0 left-0 right-0 fixed
  w-full h-full flex flex-col place-items-center"
    >
      <Message setContactState={props.setContactState} />
    </div>
  )
}

const MobileNav = (props: any) => {
  return (
    <nav className="h-64 w-full flex flex-col gap-4 text-xl justify-start items-center">
      <Link href="about">About Us</Link>
      <Link href="variety">Variety</Link>
      <Link href="where-to-buy">Where To Buy</Link>
      <button onClick={() => props.setContactState(true)}>Contact</button>
    </nav>
  )
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const pathname = usePathname()
  const { menuIsOpen, toggleMenu } = useContext(MenuContext)
  const [contactIsOpen, setContactState] = useState(false)

  return (
    <header className="container h-38 xl:h-40 2xl:h-48 relative z-20">
      <div className="py-8 flex flex-row lg:justify-start lg:gap-4 justify-between">
        <Link className="w-1/2 lg:w-1/4" href="/">
          <img
            alt="Classic Cream Logo"
            width="fill"
            height="auto"
            src="/api/media/file/CC_LOGO.svg"
          />
        </Link>
        <svg
          onClick={() => toggleMenu(menuIsOpen)}
          className="lg:hidden justify-self-end"
          width="60"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 10 15 H 50 V 20 H 10 L 10 20" />
          <path d="M 10 25 H 50 V 30 H 10 L 10 30" />
          <path d="M 10 35 H 50 V 40 H 10 L 10 40" />
        </svg>
        <nav
          className="hidden lg:flex flex-row self-center gap-4
    lg:text-xl xl:text-2xl font-bold"
        >
          <Link href="about">About Us</Link>
          <Link href="variety">Variety</Link>
          <Link href="where-to-buy">Where To Buy</Link>
        </nav>
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
      {menuIsOpen ? <MobileNav setContactState={setContactState} /> : null}
      {contactIsOpen ? <Contact setContactState={setContactState} /> : null}
    </header>
  )
}
