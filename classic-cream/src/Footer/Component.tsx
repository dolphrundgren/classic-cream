import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <>
      <div
        className="-mb-1 h-[75px] z-90 w-full bg-[length:auto_75px]
    bg-repeat-x bg-[url(/api/media/file/Black_Border_Up-1.svg)] justify-self-start"
      ></div>
      <footer
        className=" bg-[#000000] dark:bg-card text-white h-auto flex
    flex-col justify-center"
      >
        <div className="container h-auto flex flex-row justify-end">
          <a
            href="https://www.alamancefoods.com/"
            className=" w-1/2 h-1/2 
    flex flex-col justify-end items-end m-5"
          >
            <h1 className="text-xl">&#169; 2025</h1>
            <img
              alt="Corporate Logo"
              width="full"
              height="auto"
              src="/api/media/file/AFI_LOGO.svg"
            />
          </a>
        </div>
      </footer>
    </>
  )
}
