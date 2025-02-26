'use client'
import React from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

const PageClient = (props: any) => {
  const pageData = props.pages.docs[0]
  //Hero data
  const heroImage = pageData.hero.media.sizes.medium.url
  const heroImageAlt = pageData.hero.media.alt
  const heroRichText = pageData.hero.richText
  //Text Content
  const contentRichText = pageData.layout[0].columns[0].richText
  return (
    <>
      <div
        className="self-center flex flex-col lg:flex-row
  items-center justify-center xs:h-[30vh] w-full h-[20vh] lg:h-[50vh] lg:w-[85vw] bg-[#f2f2f2] mb-5"
      >
        <div className="flex flex-row items-center justify-center w-full h-[20vh] xs:h-[30vh] lg:h-[40vh] lg:w-[65vw] bg-[#d9d9d9] relative">
          <div className="flex z-10  flex-row w-full h-full">
            <RichText
              className="w-3/5 xs:text-sm text-base md:text-4xl
  3xl:text-8xl bg-gray-500/30 font-bold self-center p-3 "
              data={heroRichText}
            />
          </div>
          <Image className="object-cover z-0" fill alt={heroImageAlt} src={heroImage} />
        </div>
      </div>
    </>
  )
}

export default PageClient
