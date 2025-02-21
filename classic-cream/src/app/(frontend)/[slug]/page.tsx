'use client'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React, { useState, useEffect } from 'react'
import { SvgArrow } from '@/components/ScrollButton/index'
import { ProductArray } from '@/components/ProductArray/index'
import { ProductFocusInterface, ProductFocus } from '@/components/ProductFocus/index'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default function Page({ params: paramsPromise }: Args) {
  const [products, setProducts] = useState(null)
  const [focusedProductIndex, setProductIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [productFocus, setProductFocus] = useState<ProductFocusInterface>({ active: false })
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
  const fetchURL = `${baseURL}/api/products/`

  const toggleProductFocus = (toggleValue: ProductFocusInterface) => {
    setProductFocus(toggleValue)
  }

  useEffect(() => {
    getProducts()
    setWindowWidth(window.innerWidth)
  }, [])

  const getProducts = () =>
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })

  if (loading) return <h1>Loading</h1>
  if (windowWidth) {
    return (
      <article className="bg-white w-full overflow-x-hidden">
        <div className="flex flex-col relative w-full place-items-center">
          {productFocus.active ? (
            <h2 className="font-bold pb-8 text-2xl lg:text-5xl">{productFocus.title}</h2>
          ) : (
            <h2 className="max-[375px]:text-blue-600 font-bold pb-8 text-2xl lg:text-5xl">
              Our Classic Cream Line Up
            </h2>
          )}
          <div
            className={`${productFocus.active ? 'justify-start overflow-x-hidden h-[165vh] ' : 'justify-around items-center overflow-x-scroll h-[calc(100vh-100px)]'} flex no-scrollbar box-border relative flex-col w-full`}
          >
            <ProductFocus
              className={`${
                productFocus.active ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } duration-200 ease-in-out absolute top-0 right-0 left-0 bottom-0 m-auto`}
              toggleProductFocus={toggleProductFocus}
              productFocus={productFocus}
              windowWidth={windowWidth}
            />
            <div
              className={`${
                productFocus.active ? 'opacity-0 pointer-events-none' : 'opacity-100'
              } z-0 duration-200 ease-in-out absolute top-0 right-0
  left-0 bottom-0 m-auto flex snap-x gap-8 flex-row pl-8 pr-8`}
            >
              <ProductArray
                productFocus={productFocus}
                toggleProductFocus={toggleProductFocus}
                products={products}
              />
            </div>
          </div>
          {windowWidth < 400 ? null : productFocus.active ? null : (
            <>
              <div className="absolute left-[94%] top-[40%]">
                <SvgArrow isRight={true} />
              </div>
              <div className={`absolute right-[94%] top-[40%]`}>
                <SvgArrow isRight={false} />
              </div>
            </>
          )}
        </div>
      </article>
    )
  }
}
