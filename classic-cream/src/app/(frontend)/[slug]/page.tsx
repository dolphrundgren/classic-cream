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
      <PageClient id="about" pages={pages} />
      <ProductClient id="variety" products={products} />
      <article
        id="where-to-buy"
        className="h-[1100px] bg-[#9f9067]
  flex flex-col justify-start gap-8 lg:gap-16"
      >
        <div className="container mt-8 lg:mt-16">
          <img
            alt="Find Some Classic Cream Near You"
            width="full"
            height="auto"
            src="/api/media/file/Near_You.svg"
          />
        </div>
        <Script src="https://lets.shop/productFirstSnippet.js?id=destini-locator" />
        <div
          id="destini-locator"
          locator-id="4570"
          locator-name="Classic Cream Where To Buy"
          alpha-code="11DA"
          client-id="classiccream"
          className="container h-[800px] z-0 mb-8 rounded-2xl overflow-hidden"
        />
      </article>
      <div className="w-full xs:h-[200px] h-[250px] lg:h-[500px] 2xl:h-[600px] flex flex-row">
        <div className="hidden md:block z-40 w-3/4 h-auto flex-row self-end -ml-64 -mb-32">
          <img
            alt="Pastry with whipped puff"
            width="full"
            height="auto"
            src="/api/media/file/SC_Usage1_Resized.png"
          />
        </div>
        <div
          className="xs:h-200px h-[300px] w-[400px] 2xl:w-[600px] z-20 mt-18
  2xl:mt-32 flex flex-col xs:place-self-center self-end justify-self-end"
        >
          <h4 className="text-[8vw] lg:text-[5vw] xl:text-[4vw] 2xl:text-[2.5vw] font-bold text-[#9f9067] text-center">
            FOLLOW US!
          </h4>
          <SocialArray size="large" />
        </div>
      </div>
    </>
  )
}
