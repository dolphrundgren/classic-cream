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
    <footer className="bg-black dark:bg-card text-white h-[300px] relative">
      <div
        className="absolute left-0 -ml-[100px] -mt-[550px]
    md:h-[350px] md:w-[525px] xl:h-[700px] xl:w-[1100px]"
      >
        <Image
          alt="Pastry with whipped puff"
          className="object-cover"
          fill
          src="/api/media/file/SC_Usage1_Resized.png"
        />
      </div>
      <div className="absolute bottom-0 right-0 mb-[73px] w-[150px] h-[33px] mr-4">
        <Image alt="Copyright" className="object-cover" fill src="/api/media/file/Copyright.svg" />
      </div>
      <Link className="absolute bottom-0 right-0 h-[53px] w-[500px] mb-4 mr-4" href="/">
        <Image
          alt="Corporate Logo"
          fill
          className="object-cover overflow-visible"
          src="/api/media/file/AFI_LOGO.svg"
        />
      </Link>
    </footer>
  )
}
