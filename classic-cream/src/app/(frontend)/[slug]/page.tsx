'use client'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React, { useState, useEffect } from 'react'

interface SvgArrowValue {
  isRight: boolean
}

const scrollToElement = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

const SvgArrow = (props: SvgArrowValue) => {
  const rightArrow = 'M 0 0 L 50 25 L 0 50 L 0 0'
  const leftArrow = 'M 50 50 L 0 25 L 50 0 L 50 50'
  const svgPath = props.isRight ? rightArrow : leftArrow
  const targetId = props.isRight ? 'Zero Sugar' : 'Heavy Whipped Cream'
  return (
    <div onClick={() => scrollToElement(targetId)} className="w-24  h-24 relative">
      <svg
        className="z-0 absolute top-0 right-0 left-0 bottom-0 m-auto"
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="45" cx="50" cy="50" fill="black" />
      </svg>
      <svg
        className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} stroke="white" fill="white" strokeWidth="1" />
      </svg>
    </div>
  )
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
      const isLast = index + 2 > productCount ? true : false
      return (
        <div
          id={doc.title}
          key={index}
          onClick={() => props.toggleProductFocus('hello')}
          className={`h-[35rem] w-[20rem] snap-center lg:w-[25rem] bg-gray-200 rounded-xl flex flex-col place-items-center`}
        >
          <div className="relative h-[30rem] w-[15rem]">
            <Image
              className="object-cover"
              fill
              alt="Mocha aerosol can"
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
  if (!props.productFocus) {
    return <div>Empty</div>
  } else {
    return (
      <div className="w-[calc(100vw-20rem)] h-[calc(100vh-20rem)]">
        <h3>{props.productFocus.title}</h3>
        <button onClick={props.toggleProductFocus(false)}>Click Me</button>
      </div>
    )
  }
}

export default function Page({ params: paramsPromise }: Args) {
  const [products, setProducts] = useState(null)
  const [focusedProductIndex, setProductIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [productFocus, setProductFocus] = useState<any | false>(false)
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
  const fetchURL = `${baseURL}/api/products/`

  const toggleProductFocus = (toggleValue) => {
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
        <div className="flex flex-col relative   w-full justify-around items-center">
          <div className="absolute left-0">
            {windowWidth > 400 ? <SvgArrow isRight={false} /> : null}
          </div>
          <h2 className="text-2xl lg:text-5xl">Our Classic Cream Line Up</h2>
          <h3>{productFocus}</h3>
          <button onClick={() => toggleProductFocus(false)}>Click Me!</button>
          <div className="flex no-scrollbar box-border  overflow-x-scroll justify-around items-center flex-col w-full h-[calc(100vh-50px)] lg:h-[calc(100vh-100px)] pt-16 pb-24">
            <div className="flex snap-x md:pl-[70rem] lg:pl-[40rem] pl-[90rem] pr-[2rem] gap-8 flex-row">
              <ProductArray toggleProductFocus={toggleProductFocus} products={products} />
            </div>
          </div>
          <div className="absolute right-0">
            {windowWidth > 400 ? <SvgArrow isRight={true} /> : null}
          </div>
        </div>
      </article>
    )
  }
}
