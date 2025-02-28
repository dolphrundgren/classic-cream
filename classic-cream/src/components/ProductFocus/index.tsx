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
}

export const ProductFocus = (props: any) => {
  if (!props.productFocus.active) {
    return <div></div>
  } else {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex md:flex-row lg:flex-row
  flex-col bg-[#efe0cc] lg:justify-between place-self-center
  rounded-xl lg:h-[700px] xl:h-[850px] w-full"
      >
        <div className="flex flex-col lg:place-items-start place-items-center">
          {props.windowWidth < 450 ? (
            <button
              className="self-end text-lg h-8 w-12 m-4 "
              onClick={() => props.toggleProductFocus({ active: false })}
            >
              Back
            </button>
          ) : null}
          <div className="relative 3xl:-h[50rem]  h-[30rem] w-[15rem] lg:h-[80rem] lg:w-[20rem]">
            <Image
              alt={props.productFocus.canFrontImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.canFrontImage}
            />
          </div>
        </div>
        <div
          className="xl:h-auto lg:h-auto lg:w-3/4 xl:w-3/4 md:w-[25rem] md:h-[30rem] w-[17rem]  h-[25rem]  flex flex-col 
  justify-start lg:items-end xl:mr-10 lg:mr-10 gap-7 md:ga-5 m-5
  md:items-end place-self-center"
        >
          {props.windowWidth > 450 ? (
            <button
              className="text-xl  3xl:text-3xl md:text-sm m-4 md:m-2"
              onClick={() => props.toggleProductFocus({ active: false })}
            >
              Back
            </button>
          ) : null}
          <h4
            className="mb-[-1rem] lg:mb-[0rem] 3xl:mb-[0rem] self-center font-bold lg:text-xl
  text-lg text-center  md:text-sm"
          >
            {props.productFocus.shortDescription}
          </h4>
          <div
            className="relative lg:h-[200px] lg:w-full
  md:h-[8rem] md:w-[25rem] h-[6rem] w-[17rem] xl:h-[275px] xl:w-full"
          >
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
          {props.windowWidth < 450 ? null : (
            <h4 className="md:text-xs lg:text-base ">{props.productFocus.longDescription}</h4>
          )}
        </div>
      </div>
    )
  }
}
