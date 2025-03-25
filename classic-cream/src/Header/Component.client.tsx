'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useContext } from 'react'
import { DialogContext } from '@/providers/Dialog'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import type { Header } from '@/payload-types'
import Message from '@/app/(frontend)/[slug]/message.client'
import { SocialArray } from '@/components/SocialArray/index'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

const Contact = (props: any) => {
  return (
    <dialog
      className="bg-opacity-75 right-0 left-0 top-0 bottom-0 m-auto fixed
  w-full h-full flex flex-col place-items-center z-0"
    >
      <Message />
    </dialog>
  )
}

const MobileNav = (props: any) => {
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)
  return (
    <nav className="h-64 w-full flex flex-col gap-4 text-xl justify-start items-center">
      <Link href="About">About Us</Link>
      <Link href="Products">Variety</Link>
      <Link href="Purchase">Where To Buy</Link>
      <button onClick={() => toggleDialog(dialogIsOpen)}>Contact</button>
    </nav>
  )
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const pathname = usePathname()
  const [menuIsOpen, setMenuState] = useState(false)
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)

  useEffect(() => {
    if (dialogIsOpen) {
      document.body.classList.add('overflow-y-hidden')
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('overflow-y-hidden')
      document.body.classList.remove('fixed')
    }
  }, [dialogIsOpen])

  const toggleMenu = (menuIsOpen: boolean) => {
    setMenuState(!menuIsOpen)
  }

  return (
    <header className="container h-38 xl:h-45 2xl:h-48 relative z-0 2xl:mb-8">
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
          <Link href="/#about">About Us</Link>
          <Link href="/#variety">Variety</Link>
          <Link href="/#where-to-buy">Where To Buy</Link>
          <button onClick={() => toggleDialog(dialogIsOpen)}>Contact</button>
        </nav>
      </div>
      <div
        className="hidden lg:block absolute right-0 top-0 m-auto
    overflow-visible mt-4 lg:h-[175px] lg:w-[285px] xl:h-[225px] xl:w-[370px] 2xl:h-[260px] 2xl:w-[425px]"
      >
        <Image
          className="object-cover overflow-visible"
          fill
          alt="Brownies with a dollop"
          src="/api/media/file/Pumpkin_Spice_usage1.png"
        />
      </div>
      <div
        className="hidden lg:block absolute right-0 top-0 m-auto
    lg:w-32 xl:w-36 h-auto mt-4 lg:-mr-8  2xl:-mr-4"
      >
        <SocialArray size="small" />
      </div>
      {menuIsOpen ? <MobileNav /> : null}
      {dialogIsOpen ? <Contact /> : null}
    </header>
  )
}
