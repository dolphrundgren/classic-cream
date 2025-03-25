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
      <PageClient className="z-90" id="about" pages={pages} />
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
      <div
        className="container h-[300px] lg:h-[500px]
  2xl:h-[600px] flex flex-row md:justify-between justify-center"
      >
        <div className="hidden md:block z-40 md:w-3/4 h-auto flex-row self-end -ml-64 -mb-32">
          <img
            alt="Pastry with whipped puff"
            width="full"
            height="auto"
            src="/api/media/file/SC_Usage1_Resized.png"
          />
        </div>
        <div
          className="h-full w-3/4 md:w-1/2 lg:w-[400px] gap-4 z-20 
  flex flex-col justify-center "
        >
          <img alt="Follow Us!" width="full" height="auto" src="/api/media/file/Follow%20Us.svg" />
          <div className="w-full flex flex-row justify-between">
            <a className="w-1/2 h-full" href="https://www.instagram.com/classiccreamofficial_/">
              <img
                alt="Instagram Icon"
                width="90%"
                height="auto"
                src="/api/media/file/IG_logo.svg"
              />
            </a>
            <a
              className="w-1/2 h-full"
              href="https://www.facebook.com/people/Classic-Cream/61572215256926/"
            >
              <img
                alt="Facebook Icon"
                width="90%"
                height="auto"
                src="/api/media/file/facebook_logo.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
