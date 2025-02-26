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
  items-center justify-center xs:h-[30vh] w-full h-[20vh] lg:h-[50vh] lg:w-[85vw] bg-[#f2f2f2] "
      >
        <div className="flex flex-row items-center justify-center w-full h-[20vh] xs:h-[30vh] lg:h-[40vh] lg:w-[65vw] bg-[#d9d9d9] relative">
          <div className="flex z-10  flex-row w-full h-full">
            <RichText
              className="w-3/5 xs:text-sm text-base md:text-3xl
  3xl:text-8xl bg-gray-500/30 font-bold self-center p-3 "
              data={heroRichText}
            />
          </div>
          <Image className="object-cover z-0" fill alt={heroImageAlt} src={heroImage} />
        </div>
      </div>
      <div
        className="self-center flex flex-row items-center
  lg:justify-start justify-center h-[30vh] w-[80vw] lg:h-[45vh]
  lg:w-[85vw] bg-[#d9d9d9] m-8 lg:mb-5 rounded-xl"
      >
        <div
          className=" invisible  lg:visible flex flex-col -rotate-[35deg] translate-x-16 items-start self-start mt-24
  lg:w-1/4 w-0 lg:text-xl 2xl:text-2xl 3xl:text-7xl"
        >
          <h4>No Lactose?</h4>
          <h4>No Sugar?</h4>
          <h4 className="font-bold"> No Problem!</h4>
        </div>
        <RichText
          className="lg:w-1/2 w-3/4 text-sm md:text-xl lg:text-2xl 3xl:text-6xl"
          data={contentRichText}
        />
      </div>
    </>
  )
}

export default PageClient
