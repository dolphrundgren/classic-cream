import React, { useState, useEffect } from 'react'
import PageClient from './page.client'
import { getPayload } from 'payload'
import config from '@payload-config'

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

export default async function Page({ params: paramsPromise }: Args) {
  const products = await retrieveProducts()
  return <PageClient products={products} />
}
