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
        className="flex  lg:flex-row
  flex-col bg-[#cccccc] lg:justify-between place-self-center
  rounded-xl xs:h-[500px] h-[575px] lg:h-[600px] xl:h-[650px] w-full"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="hidden lg:block relative w-[400px] h-[500px] m-4 rounded-3xl overflow-hidden">
            <Image
              alt={props.productFocus.foodImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.foodImage}
            />
          </div>
        </div>
        <div
          className="xl:h-auto lg:h-auto lg:w-3/4 xl:w-3/5 md:w-3/4 md:h-[30rem] w-[17rem]  h-[25rem]  flex flex-col 
  justify-start lg:items-end xl:mr-10 lg:mr-10 gap-7 md:ga-5 m-5
  md:items-center place-self-center"
        >
          <h4
            className="mb-[-1rem] lg:mb-[0rem] 3xl:mb-[0rem]
  self-start font-bold xs:text-base lg:text-3xl
  text-lg md:text-4xl"
          >
            {props.productFocus.title}
          </h4>
          <img
            alt={props.productFocus.nutritionFactImageAlt}
            width="full"
            height="auto"
            src={props.productFocus.nutritionFactImage}
          />
          <RichText
            className="text-sm md:text-base lg:text-sm md:text-xs"
            data={props.productFocus.ingredients}
          />
          <button
            className="bg-[#9f9067] min-h-[55px] w-[225px] aspect-[4] text-white m-4 md:m-2 rounded-2xl font-extrabold text-xl"
            onClick={() => props.toggleProductFocus({ active: false })}
          >
            Product Selection
          </button>
        </div>
      </div>
    )
  }
}
