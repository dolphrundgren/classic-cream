import React, { useEffect } from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { SvgExButton } from '@/components/ExButton/index'

export interface ProductFocusInterface {
  active: boolean
  title?: string
  longDescription?: string
  shortDescription?: string
  microDescription?: string
  butterFat?: string
  canFrontImage?: string
  canFrontImageAlt?: string
  nutritionFactImage?: string
  nutritionFactImageAlt?: string
  ingredients?: string
  foodImage?: string
  foodImageAlt?: string
}

export const ProductFocus = (props: any) => {
  if (!props.productFocus.active) {
    return <div></div>
  } else {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex md:flex-row lg:flex-row
  flex-col bg-[#cccccc] lg:justify-between place-self-center
  rounded-xl lg:h-[700px] xl:h-[650px] w-full"
      >
        <div className="flex flex-col items-center justify-center">
          <div className={`relative w-[400px] h-[500px] m-4 rounded-3xl overflow-hidden`}>
            <Image
              className="rounded-3xl"
              alt={props.productFocus.foodImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.foodImage}
            />
          </div>
        </div>
        <div
          className="xl:h-auto lg:h-auto lg:w-3/4 xl:w-3/5 md:w-[25rem] md:h-[30rem] w-[17rem]  h-[25rem]  flex flex-col 
  justify-start lg:items-end xl:mr-10 lg:mr-10 gap-7 md:ga-5 m-5
  md:items-end place-self-center"
        >
          <h4
            className="mb-[-1rem] lg:mb-[0rem] 3xl:mb-[0rem]
  self-start font-bold lg:text-3xl
  text-lg md:text-sm"
          >
            {props.productFocus.title}
          </h4>
          <div className="relative h-[260px] w-full">
            <Image
              alt={props.productFocus.nutritionFactImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.nutritionFactImage}
            />
          </div>
          <RichText
            className="text-sm lg:text-sm md:text-xs"
            data={props.productFocus.ingredients}
          />
          <button
            className="bg-[#9f9067] w-[225px] aspect-[4] text-white m-4 md:m-2 rounded-2xl font-extrabold text-xl"
            onClick={() => props.toggleProductFocus({ active: false })}
          >
            Product Selections
          </button>
        </div>
      </div>
    )
  }
}
