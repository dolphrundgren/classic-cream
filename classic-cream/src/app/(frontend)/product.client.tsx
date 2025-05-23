'use client'
import React, { useState, useEffect, useContext } from 'react'
import { SvgArrow } from '@/components/ScrollButton/index'
import { ProductArray } from '@/components/ProductArray/index'
import { ProductFocusInterface, ProductFocus } from '@/components/ProductFocus/index'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { DialogContext } from '@/providers/Dialog'

interface ScrollPositionInterface {
  current: number
  max: number
  right: number
  left: number
}

const ProductClient = (props: any) => {
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [productFocus, setProductFocus] = useState<ProductFocusInterface>({
    active: false,
    title: '',
  })
  const [scrollIndex, setScrollIndex] = useState<ScrollPositionInterface>({
    current: 0,
    max: 0,
    right: 1,
    left: -1,
  })

  const dialogMod = `w-full bg-white overflow-x-hidden ${dialogIsOpen ? 'hidden' : 'bg-white'}`

  const toggleProductFocus = (toggleValue: ProductFocusInterface) => {
    setProductFocus(toggleValue)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setScrollIndex((prevState) => ({
      ...prevState,
      max: props.products.docs.length,
    }))
  }, [props.products])

  function updateScrollIndex(isRight: boolean) {
    if (isRight && scrollIndex.right < scrollIndex.max) {
      setScrollIndex((prevState) => ({
        ...prevState,
        current: prevState.right,
        right: prevState.right + 1,
        left: prevState.current,
      }))
    } else if (!isRight && scrollIndex.current != 0) {
      setScrollIndex((prevState) => ({
        ...prevState,
        current: prevState.left,
        right: prevState.current,
        left: prevState.left ? prevState.left - 1 : -1,
      }))
    }
  }

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
              <SvgArrow
                isRight={false}
                updateScrollIndex={updateScrollIndex}
                scrollIndex={scrollIndex}
              />
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
              <SvgArrow
                isRight={true}
                updateScrollIndex={updateScrollIndex}
                scrollIndex={scrollIndex}
              />
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default ProductClient
