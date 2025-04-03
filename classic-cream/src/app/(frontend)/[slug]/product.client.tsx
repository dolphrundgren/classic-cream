'use client'
import React, { useState, useEffect, useContext } from 'react'
import { SvgArrow } from '@/components/ScrollButton/index'
import { ProductArray } from '@/components/ProductArray/index'
import { ProductFocusInterface, ProductFocus } from '@/components/ProductFocus/index'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { DialogContext } from '@/providers/Dialog'

const ProductClient = (props: any) => {
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [productFocus, setProductFocus] = useState<ProductFocusInterface>({
    active: false,
    title: '',
  })
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
  const fetchURL = `${baseURL}/api/products/`
  const dialogMod = `w-full bg-white overflow-x-hidden ${dialogIsOpen ? 'hidden' : 'bg-white'}`

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
      <article id="variety" className={dialogMod}>
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
          <div className="container h-auto flex flex-row justify-center">
            <ProductFocus toggleProductFocus={toggleProductFocus} productFocus={productFocus} />
            <div
              className={`${productFocus.active ? 'lg:hidden' : 'block'} hidden self-center lg:block`}
            >
              <SvgArrow isRight={false} />
            </div>
            <div
              className={`${productFocus.active ? 'hidden' : 'flex'} h-auto w-max-[100%] gap-3 xl:gap-4 flex-row overflow-x-scroll no-scrollbar`}
            >
              <ProductArray
                productFocus={productFocus}
                toggleProductFocus={toggleProductFocus}
                products={props.products}
                windowWidth={windowWidth}
              />
            </div>
            <div
              className={`${productFocus.active ? 'lg:hidden' : 'block'} hidden self-center lg:block`}
            >
              <SvgArrow isRight={true} />
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default ProductClient
