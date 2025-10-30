'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { DialogContext } from '@/providers/Dialog'

const PageClient = (props: any) => {
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)
  const pageData = props.pages.docs[0]
  //Hero data
  const heroImage = pageData.hero.media.sizes.medium.url
  const heroImageAlt = pageData.hero.media.alt
  const heroRichText = pageData.hero.richText
  //Text Content
  const contentRichText = pageData.layout[0].columns[0].richText
  const contentFocus = pageData.layout[1].media.sizes.medium.url
  const dairyBadge = pageData.layout[2].media.url
  const premiumBadge = pageData.layout[3].media.url
  const dialogMod = `w-full h-auto ${dialogIsOpen ? 'invisible' : 'bg-[#cccccc]'}`
  return (
    <article id="about" className={dialogMod}>
      <div
        className="h-[115px] z-10 -mt-[18px] md:-mt-[15px] lg:-mt-[10px] 2xl:-mt-[12px] w-full
  bg-[length:auto_115px] lg:bg-[length:auto_70px] 2xl:bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/Black_Ribbon-1.svg)]"
      ></div>
      <div
        className="mt-8 lg:mt-10 xl:mt-15 container
  self-center flex flex-col items-center justify-center
  h-auto mb-[70px] overflow-hidden rounded-xl"
      >
        <a href="https://www.amazon.com/Classic-Cream-Salted-Caramel-Whipped/dp/B0FPRZQBRS/">
          <h1 className="xs:text-xl text-2xl md:text-5xl lg:text-6xl text-[#016b27] p-8 font-bold overflow-visible">
            Find us on Amazon!
          </h1>
        </a>
        <a href="https://www.amazon.com/Classic-Cream-Salted-Caramel-Whipped/dp/B0FPRZQBRS/">
          <img
            alt="portrait image"
            className="object-cover rounded-xl lg:hidden block
  overflow-hidden"
            src="https://res.cloudinary.com/alamancefoods/image/upload/v1758906578/ClassicCream/Wicked/wicked_hero_portrait.jpg"
          />
          <img
            alt="large image"
            className="object-cover rounded-xl lg:block hidden"
            src="https://res.cloudinary.com/alamancefoods/image/upload/v1758916615/ClassicCream/Wicked/desktop_alt_hero.jpg"
          />
        </a>
      </div>
      <div
        className="h-[115px] z-10 -mb-[24px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/White_Ribbon-1.svg)]"
      ></div>
    </article>
  )
}

export default PageClient
