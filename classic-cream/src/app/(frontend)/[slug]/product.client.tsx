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
          <h2 className="font-extrabold text-[5.25vw] text-[#9f9067] mb-12">
            WHIPPED CREAM IS OUR THING
          </h2>
          <div
            className={`${productFocus.active ? 'container justify-start' : 'justify-around items-center xs:h-[500px] h-[500px] lg:h-[600px] '} flex no-scrollbar box-border relative flex-col w-full mb-8`}
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
  overflow-x-scroll no-scrollbar items-center xl:justify-start 2xl:justify-center`}
            >
              <ProductArray
                productFocus={productFocus}
                toggleProductFocus={toggleProductFocus}
                products={props.products}
                windowWidth={windowWidth}
              />
            </div>
            {windowWidth < 602 ? null : windowWidth > 1500 ? null : productFocus.active ? null : (
              <>
                <div className="absolute top-[200px] right-0  m-auto">
                  <SvgArrow isRight={true} />
                </div>
                <div className={`absolute top-[200px] left-0 m-auto`}>
                  <SvgArrow isRight={false} />
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    )
  }
}

export default ProductClient
