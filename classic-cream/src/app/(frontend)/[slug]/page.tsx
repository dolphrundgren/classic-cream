import type { Metadata } from 'next'
import Image from 'next/image'
import RichText from '@/components/Richtext/index'
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
  console.log(products.docs[0])
  const payload = products.docs[0]
  const mochaURL = products.docs[0].canFrontImage.url
  const title = payload.title
  const microDescription = payload.microProductDescription
  const longProductDescription = payload.longProductDescription
  const butterFatPercentage = payload.butterFatPercentage
  const ingredientsRichText = payload.ingredients
  const nutritionFactImage = payload.nutritionFactImage
  return (
    <article className="bg-blue-50">
      <div className="w-full h-[calc(100vh-200px)] pt-16 pb-24">
        <Image width={160} height={160} alt="Mocha aerosol can" src={mochaURL} />
        <h1>{title}</h1>
        <h1>{microDescription}</h1>
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
