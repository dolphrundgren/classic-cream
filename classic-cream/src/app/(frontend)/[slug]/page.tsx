import React, { useState, useEffect } from 'react'
import ProductClient from './product.client'
import PageClient from './page.client'
import { getPayload } from 'payload'
import config from '@payload-config'

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
    </>
  )
}
