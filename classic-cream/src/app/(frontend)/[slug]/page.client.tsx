'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { MenuContext } from '@/providers/Menu'

const PageClient = (props: any) => {
  const { menuIsOpen, toggleMenu } = useContext(MenuContext)
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
  return (
    <div className="w-full h-auto bg-[#cccccc]">
      <div
        className="h-[115px] z-0 -mt-[12px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/Black_Ribbon-1.svg)]"
      ></div>
      <div
        className="mt-4 md:mt-8 lg:mt-10 xl:mt-15 container
  self-center flex flex-col lg:flex-row items-center justify-between
  xs:h-[150px] h-[165px] md:h-[250px] lg:h-[350px] xl:h-[400px]
  2xl:h-[635px] w-full mb-[70px]"
      >
        <div
          className="flex flex-row items-center lg:justify-start
  justify-center rounded-3xl h-full w-full   bg-[#ffffff] relative
  overflow-y-visible gap-4"
        >
          <div
            className="overflow-y-visible relative -mb-[50px]
  h-[650px] w-[440px] self-end z-40"
          >
            <Image
              className="object-cover overflow-y-visible"
              fill
              alt="Pancakes"
              src={contentFocus}
            />
          </div>
          <div className="overflow-y-visible -ml-[200px] -mt-[45px] w-[200px] h-[200px] relative self-start z-30">
            <Image className="object-cover overflow-y-visible" fill alt="badge" src={dairyBadge} />
          </div>
          <div className="flex flex-col w-[500px] h-full">
            <div
              className="w-[450px] h-[85px] relative
  justify-self-start -mt-[32px] mb-[55px]"
            >
              <Image
                className="object-cover"
                fill
                alt="Premium
  Quality"
                src={premiumBadge}
              />
            </div>
            <RichText
              className="text-xs md:text-xl lg:text-2xl xl:text-xl"
              data={contentRichText}
            />
          </div>
          <div className="grow flex flex-row place-content-end">
            <div className="relative h-[565px] w-[315px] ">
              <Image className="object-cover" fill alt="Hero Image" src={heroImage} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[115px] z-0 -mb-[24px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/White_Ribbon-1.svg)]"
      ></div>
    </div>
  )
}

export default PageClient
