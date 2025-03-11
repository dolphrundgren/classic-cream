'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { MenuContext } from '@/providers/Menu'

const PageClient = (props: any) => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const pageData = props.pages.docs[0]
  //Hero data
  const heroImage = pageData.hero.media.sizes.medium.url
  const heroImageAlt = pageData.hero.media.alt
  const heroRichText = pageData.hero.richText
  //Text Content
  const contentRichText = pageData.layout[0].columns[0].richText
  return (
    <div className={`container ${isMenuOpen ? 'h-0' : 'h-full'}`}>
      <div className="mt-4 md:mt-8 lg:mt-10 xl:mt-15 container self-center flex flex-col lg:flex-row items-center justify-center xs:h-[150px] h-[165px] md:h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[435px] w-full">
        <div className="flex flex-row items-center lg:justify-start justify-center rounded-3xl h-full w-full   bg-[#d9d9d9] relative">
          <RichText
            className="w-3/4 lg:w-1/2 text-xs md:text-xl lg:text-2xl xl:text-xl"
            data={contentRichText}
          />
        </div>
      </div>
    </div>
  )
}

export default PageClient
