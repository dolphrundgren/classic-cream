import type { Metadata } from 'next'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

interface SvgArrowValue {
  isRight: boolean
}

const SvgArrow = (props) => {
  const rightArrow = 'M 0 0 L 50 25 L 0 50 L 0 0'
  const leftArrow = 'M 50 50 L 0 25 L 50 0 L 50 50'
  const svgPath = props.isRight ? rightArrow : leftArrow
  return (
    <div className="w-24  h-24 relative">
      <svg
        className="z-0 absolute top-0 right-0 left-0 bottom-0 m-auto"
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="45" cx="50" cy="50" fill="gray" />
      </svg>
      <svg
        className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} stroke="black" fill="black" strokeWidth="1" />
      </svg>
    </div>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const products = await RenderProducts()
  console.log(products.docs.length)
  const productArray = products.docs.map((doc) => (
    <div
      key={doc.title}
      className="h-[35rem] w-[20rem] lg:w-[25rem] bg-gray-200 rounded-xl flex flex-col place-items-center"
    >
      <div className="relative h-[30rem] w-[15rem]">
        <Image className="object-cover" fill alt="Mocha aerosol can" src={doc.canFrontImage.url} />
      </div>
      <h3>{doc.title}</h3>
      <h3>{doc.microDescription}</h3>
    </div>
  ))

  const payload = products.docs[0]
  const mochaURL = products.docs[0].canFrontImage.url
  const title = payload.title
  const microDescription = payload.microProductDescription
  const longProductDescription = payload.longProductDescription
  const butterFatPercentage = payload.butterFatPercentage
  const ingredientsRichText = payload.ingredients
  const nutritionFactImage = payload.nutritionFactImage
  return (
    <article className="bg-white">
      <SvgArrow isRight={true} />
      <SvgArrow isRight={false} />
      <div className="flex flex-col w-full justify-around items-center">
        <h2 className="text-2xl lg:text-5xl">Our Classic Cream Line Up</h2>
        <div className="flex no-scrollbar overflow-x-scroll justify-around items-center flex-col w-full h-[calc(100vh-50px)] lg:h-[calc(100vh-100px)] pt-16 pb-24">
          <div className="flex gap-8 flex-row">{productArray}</div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

async function RenderProducts() {
  const url = 'http://localhost:3000/api/products/'
  const req = await fetch(url)
  const data = req.json()
  return data
}
