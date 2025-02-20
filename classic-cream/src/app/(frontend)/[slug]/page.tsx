'use client'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React, { useState, useEffect } from 'react'
import { SvgArrow } from '@/components/ScrollButton/index'

interface ProductFocusInterface {
  active: boolean
  title?: string
  longDescription?: string
  shortDescription?: string
  butterFat?: string
  canFrontImage?: string
  canFrontImageAlt?: string
  nutritionFactImage?: string
  nutritionFactImageAlt?: string
}

const scrollToElement = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const ProductArray = (props: any) => {
  if (!props.products) {
    return <div>Empty</div>
  } else {
    const productCount = props.products.docs.length
    const productArray = props.products.docs.map(function (doc: any, index: number) {
      const productJSON = {
        active: true,
        title: doc.title,
        longDescription: doc.longProductDescription,
        shortDescription: doc.shortProductDescription,
        butterfat: doc.butterFatPercentage,
        canFrontImage: doc.canFrontImage.url,
        canFrontImageAlt: doc.canFrontImage.alt,
        nutritionFactImage: doc.nutritionFactImage.url,
        nutritionFactImageAlt: doc.nutritionFactImage.alt,
      }
      return (
        <div
          id={doc.title}
          key={index}
          onClick={() => props.toggleProductFocus(productJSON)}
          className={`h-[35rem] w-[20rem] snap-center lg:w-[25rem] bg-gray-200 rounded-xl flex flex-col place-items-center`}
        >
          <div className="relative h-[30rem] w-[15rem]">
            <Image
              className="object-cover"
              fill
              alt={doc.canFrontImage.alt}
              src={doc.canFrontImage.url}
            />
          </div>
          <h3>{doc.title}</h3>
          <h3>{doc.microDescription}</h3>
        </div>
      )
    })
    return productArray
  }
}

const ProductFocus = (props: any) => {
  if (!props.productFocus.active) {
    return <div>Empty</div>
  } else {
    return (
      <div className="w-[calc(100vw-20rem)] h-[calc(100vh-20rem)]">
        <button onClick={() => props.toggleProductFocus(false)}>UnFocus</button>
        <h3>{props.productFocus.title}</h3>
        <h4>{props.productFocus.description}</h4>
        <h5>{props.productFocus.butterfat}</h5>
        <div className="relative h-[20rem] w-[10rem]">
          <Image
            alt={props.productFocus.canFrontImageAlt}
            className="object-cover"
            fill
            src={props.productFocus.canFrontImage}
          />
        </div>
        <div className="relative h-[20rem] w-[10rem]">
          <Image
            alt={props.productFocus.nutritionFactImageAlt}
            className="object-cover"
            fill
            src={props.productFocus.nutritionFactImage}
          />
        </div>
      </div>
    )
  }
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
      <article className="bg-white">
        {productFocus.active ? (
          <ProductFocus toggleProductFocus={toggleProductFocus} productFocus={productFocus} />
        ) : (
          <div className="flex flex-col relative   w-full justify-around items-center">
            <div className="absolute left-0">
              {windowWidth > 400 ? <SvgArrow isRight={false} /> : null}
            </div>
            <h2 className="text-2xl lg:text-5xl">Our Classic Cream Line Up</h2>
            <div className="flex no-scrollbar box-border  overflow-x-scroll justify-around items-center flex-col w-full h-[calc(100vh-50px)] lg:h-[calc(100vh-100px)] pt-16 pb-24">
              <div className="flex snap-x md:pl-[70rem] lg:pl-[40rem] pl-[90rem] pr-[2rem] gap-8 flex-row">
                <ProductArray toggleProductFocus={toggleProductFocus} products={products} />
              </div>
            </div>
            <div className="absolute right-0">
              {windowWidth > 400 ? <SvgArrow isRight={true} /> : null}
            </div>
          </div>
        )}
      </article>
    )
  }
}
