'use client'
import React, { useState, useEffect } from 'react'
import { SvgArrow } from '@/components/ScrollButton/index'
import { ProductArray } from '@/components/ProductArray/index'
import { ProductFocusInterface, ProductFocus } from '@/components/ProductFocus/index'
import { RichText } from '@payloadcms/richtext-lexical/react'

const ProductClient = (props: any) => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [productFocus, setProductFocus] = useState<ProductFocusInterface>({
    active: false,
    title: '',
  })
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
      <article className="bg-white  w-full overflow-x-hidden">
        <div
          onClick={productFocus.active ? () => toggleProductFocus({ active: false }) : () => null}
          className="flex flex-col relative w-full place-items-center
  overflow-x-hidden"
        >
          {productFocus.active ? (
            <h2 className="font-bold pb-8 text-2xl lg:text-5xl 3xl:text-8xl 3xl:m-8">
              {productFocus.title}
            </h2>
          ) : (
            <h2
              className="font-bold pb-8 md:pt-6 text-2xl lg:text-5xl
  md:text-4xl 3xl:text-8xl 3xl:mt-8"
            >
              Our Classic Cream Line Up
            </h2>
          )}
          <div
            className={`${productFocus.active ? 'justify-start xs:h-[165vh] md:h-[45vh] h-[130vh] lg:h-[90vh] 3xl:h-[110vh]' : 'justify-around items-center xs:h-[calc(100vh-50px)] h-[calc(100vh-200px)] md:h-[50vh] lg:h-[95vh]'} flex no-scrollbar box-border relative flex-col w-full`}
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
  left-0 bottom-0 m-auto flex snap-x gap-8 3xl:gap-32 flex-row pl-8 pr-8
  overflow-x-scroll no-scrollbar items-center 3xl:justify-center `}
            >
              <ProductArray
                productFocus={productFocus}
                toggleProductFocus={toggleProductFocus}
                products={props.products}
              />
            </div>
          </div>
          {windowWidth < 602 ? null : windowWidth > 1700 ? null : productFocus.active ? null : (
            <>
              <div className="absolute md:left-[84%] md:top-[50%] lg:left-[94%] lg:top-[40%]">
                <SvgArrow isRight={true} />
              </div>
              <div className={`absolute md:right-[84%] md:top-[50%] lg:right-[94%] lg:top-[40%]`}>
                <SvgArrow isRight={false} />
              </div>
            </>
          )}
        </div>
      </article>
    )
  }
}

export default ProductClient
