import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import ProductClient from './product.client'
import PageClient from './page.client'
import FormsClient from './forms.client'
import Subscribe from './subscribe.client'
import Message from './message.client'
import { getPayload } from 'payload'
import config from '@payload-config'
import { SocialArray } from '@/components/SocialArray/index'
import { DestiniLocator, DestiniLocatorType } from '@spins/react-locator'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

async function retrieveData() {
  const payload = await getPayload({ config })
  const products = await payload.find({ collection: 'products' })
  const pages = await payload.find({ collection: 'pages' })
  return { products, pages }
}

export default async function Page({ params }: Args) {
  const { products, pages } = await retrieveData()
  return (
    <>
      <PageClient pages={pages} />
      <ProductClient products={products} />
      <Script src="https://lets.shop/productFirstSnippet.js?id=destini-locator" />
      <article className="h-[1100px] bg-[#9f9067] flex flex-col justify-center">
        <div
          className="h-[115px] z-10 -mt-[24px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/White_Ribbon-1.svg)]"
        ></div>
        <h1 className="text-[4.5vw] text-white m-8 font-bold italic text-center">
          FIND SOME CLASSIC CREAM NEAR YOU
        </h1>
        <div
          id="destini-locator"
          locator-id="4570"
          locator-name="Classic Cream Where To Buy"
          alpha-code="11DA"
          client-id="classiccream"
          className="container h-[800px] z-0 mb-8 rounded-2xl overflow-hidden"
        />
        <div
          className="h-[115px] self-center z-10 -mb-[18px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/White_Ribbon-1.svg)]"
        ></div>
      </article>
      <div
        className="container h-[500px] 2xl:h-[600px] flex flex-row
  justify-end xs:bg-red-500 md:bg-green-500 lg:bg-purple-500 xl:bg-yellow-500 2xl:bg-orange-500"
      >
        <div className="h-[300px] w-[400px] 2xl:mt-32 flex flex-col justify-center">
          <h4 className="text-[3.5vw] 2xl:text-[1.5vw] font-bold text-[#9f9067] text-center">
            FOLLOW US!
          </h4>
          <SocialArray size="large" />
        </div>
      </div>
      <div
        className="h-[115px] -mb-[24px] w-full bg-[length:auto_110px]
    bg-repeat-x bg-[url(/api/media/file/Black_Ribbon-1.svg)]"
      ></div>
    </>
  )
}
