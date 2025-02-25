import React, { useState, useEffect } from 'react'
import PageClient from './page.client'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const products = await payload.find({ collection: 'products' })
  return { slug: 'home' }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

async function retrieveProducts() {
  const payload = await getPayload({ config })
  const products = await payload.find({ collection: 'products' })
  return products
}

export default async function Page({ params }: Args) {
  const slug = (await params).slug
  const products = await retrieveProducts()
  return (
    <>
      <h1>{slug}</h1>
      <PageClient products={products} />
    </>
  )
}
