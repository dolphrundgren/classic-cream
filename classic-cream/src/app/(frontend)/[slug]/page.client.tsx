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
        className="h-[115px] z-0 lg:-mt-[10px] 2xl:-mt-[12px] w-full
  lg:bg-[length:auto_70px] 2xl:bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/Black_Ribbon-1.svg)]"
      ></div>
      <div
        className="mt-4 md:mt-8 lg:mt-10 xl:mt-15 container
  self-center flex flex-col lg:flex-row items-center justify-between
  xs:h-[150px] h-[450px] md:h-[250px] lg:h-[350px] xl:h-[400px]
  2xl:h-[635px] w-[350px] lg:w-full mb-[70px] "
      >
        <div
          className="flex flex-row items-center lg:justify-start
  justify-center rounded-3xl h-full w-full   bg-[#ffffff] relative
  lg:overflow-y-visible gap-4 xs:bg-red-500 sm:bg-blue-500
  md:bg-green-500 lg:bg-purple-500 xl:bg-yellow-500 2xl:bg-orange-500"
        >
          <div
            className="hidden lg:block overflow-y-visible relative -mb-[50px]
  xl:h-[425px] xl:w-[280px] 2xl:h-[650px] 2xl:w-[440px] self-end z-40"
          >
            <Image
              className="object-cover overflow-y-visible"
              fill
              alt="Pancakes"
              src={contentFocus}
            />
          </div>
          <div
            className="overflow-y-visible -ml-[200px] -mt-[45px]
  hidden lg:block lg:w-[200px] lg:h-[200px] relative self-start z-30"
          >
            <Image className="object-cover overflow-y-visible" fill alt="badge" src={dairyBadge} />
          </div>
          <div className="relative flex flex-col w-[500px] h-full overflow-visible">
            <div
              className="h-[35px] w-[200px] lg:w-[450px] lg:h-[85px] relative
  self-center justify-self-start -mt-[15px] lg:-mt-[32px] lg:mb-[55px]"
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
              className="ml-4 mt-4 lg:mt-0 lg:ml-0 text-sm md:text-xl lg:text-2xl xl:text-xl"
              data={contentRichText}
            />
            <div className="absolute bottom-0 right-0 left-0 m-auto -mb-[50px] block lg:hidden overflow-visible h-[175px] w-[275px]">
              <Image
                className="object-cover"
                fill
                alt="Brownies with a
    dollop"
                src="/api/media/file/Pumpkin_Spice_usage1.png"
              />
            </div>
          </div>
          <div className="hidden lg:grow lg:flex flex-row place-content-end">
            <div className="relative lg:h-[200px] lg:w-[250px] 2xl:h-[565px] 2xl:w-[315px] ">
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
