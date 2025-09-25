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
  self-center flex flex-col lg:flex-row items-center justify-between
  xs:h-[475px] h-[450px] md:h-[550px] lg:h-[700px] xl:h-[600px]
  2xl:h-[635px]   mb-[70px] "
      >
        <div
          className="flex flex-row items-center lg:justify-start
  justify-center rounded-3xl h-full w-full   bg-[#ffffff] relative
  lg:overflow-y-visible gap-4 overflow-hidden"
        >
          <img
            alt="alt stuff"
            width="full"
            height-auto
            src="https://res.cloudinary.com/alamancefoods/image/upload/v1758822178/ClassicCream/Wicked/wicked_desktop_hero.jpg"
          />
        </div>
      </div>
      <div
        className="h-[115px] z-10 -mb-[24px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/White_Ribbon-1.svg)]"
      ></div>
    </article>
  )
}

export default PageClient
