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
      <article id="variety" className="scroll-smooth bg-white overflow-x-hidden w-full">
        <div
          onClick={productFocus.active ? () => toggleProductFocus({ active: false }) : () => null}
          className="container flex flex-col relative place-items-center overflow-x-hidden"
        >
          <img
            alt="Whipped Cream Is Our Thing"
            className="mb-8"
            width="full"
            height-auto
            src="/api/media/file/Whipped_Cream_Thing.svg"
          />
          <div className="container flex flex-row">
            <div className="hidden self-center -ml-16 lg:block ">
              <SvgArrow isRight={false} />
            </div>
            <div
              className={`${productFocus.active ? 'overflow-clip' : '  overflow-x-scroll'} no-scrollbar
  box-border relative  mb-8 xs:h-[500px] h-[575px] lg:h-[600px]
  2xl:h-[675px] grow`}
            >
              <ProductFocus
                className={`${
                  productFocus.active ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } duration-200 ease-in-out absolute top-0 right-0 left-0 bottom-0 m-auto`}
                toggleProductFocus={toggleProductFocus}
                productFocus={productFocus}
              />
              <div
                className={`${
                  productFocus.active ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } xs:w-[1500px] h-full z-0 duration-200 ease-in-out absolute  m-auto flex
  flex-row  snap-x snap-mandatory gap-8 3xl:gap-32 pl-8 pr-8
  overflow-x-scroll no-scrollbar items-center justify-start 2xl:justify-center`}
              >
                <ProductArray
                  productFocus={productFocus}
                  toggleProductFocus={toggleProductFocus}
                  products={props.products}
                  windowWidth={windowWidth}
                />
              </div>
            </div>
            <div className="hidden self-center -mr:16 lg:block">
              <SvgArrow isRight={true} />
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default ProductClient
