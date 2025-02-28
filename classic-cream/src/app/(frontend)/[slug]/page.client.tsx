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
        className="container self-center flex flex-col lg:flex-row
  items-center justify-center xs:h-[150px] h-[165px] md:h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[435px] w-full"
      >
        <div className="flex flex-row items-center justify-center h-full w-full   bg-[#d9d9d9] relative">
          <div className="flex z-10  flex-row w-full h-full">
            <RichText
              className="flex flex-col w-3/5 lg:h-[200px] bg-gray-500/30 font-bold self-center justify-center text-left p-3 xs:text-sm lg:text-4xl 2xl:text-5xl"
              data={heroRichText}
            />
          </div>
          <Image className="object-cover z-0" fill alt={heroImageAlt} src={heroImage} />
        </div>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10 xl:mt-15 container self-center flex flex-col lg:flex-row items-center justify-center xs:h-[150px] h-[165px] md:h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[435px] w-full">
        <div className="flex flex-row items-center lg:justify-start justify-center rounded-3xl h-full w-full   bg-[#d9d9d9] relative">
          <div
            className=" invisible  lg:visible flex flex-col -rotate-[35deg] translate-x-16 items-start self-start mt-24
  w-0 lg:w-1/4 lg:text-xl xl:text-3xl 2xl:text-2xl "
          >
            <h4>No Lactose?</h4>
            <h4>No Sugar?</h4>
            <h4 className="font-bold"> No Problem!</h4>
          </div>
          <RichText
            className="w-3/4 lg:w-1/2 text-xs md:text-xl lg:text-2xl xl:text-3xl"
            data={contentRichText}
          />
        </div>
      </div>
    </>
  )
}

export default PageClient
