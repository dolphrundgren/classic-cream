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
        className="w-[calc(100vw-15vw)]  lg:h-[calc(100vh-10rem)]
  3xl:h-[60vh] flex md:flex-row lg:flex-row
  flex-col bg-[#efe0cc] lg:justify-between place-self-center
  rounded-xl"
      >
        <div className="flex flex-col lg:place-items-start place-items-center">
          {props.windowWidth < 400 ? (
            <button
              className="self-end text-lg h-8 w-12 m-4 "
              onClick={() => props.toggleProductFocus({ active: false })}
            >
              Back
            </button>
          ) : null}
          <div className="flex lg:rounded-l-none rounded-xl md:rounded-l-none justify-center text-center flex-col h-8 lg:h-[8rem] w-[15rem]  bg-[#d9d9d9]">
            <h5 className=" text-lg">{`${props.productFocus.butterfat}% BUTTER FAT`}</h5>
          </div>
          <div className="relative 3xl:-h[50rem] 3xl:w-[40rem] h-[30rem] w-[15rem] lg:h-[80rem] lg:w-[20rem]">
            <Image
              alt={props.productFocus.canFrontImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.canFrontImage}
            />
          </div>
        </div>
        <div
          className="lg:w-[40rem] lg:h-[45rem] md:w-[25rem] md:h-[30rem] w-[17rem]  h-[25rem] 3xl:w-[75rem] 3xl:h-[100rem] flex flex-col 
  justify-start  lg:items-end lg:mr-10 gap-7 md:gap-5 m-5 md:items-end"
        >
          {props.windowWidth > 400 ? (
            <button
              className="text-xl lg:text-2xl 3xl:text-3xl md:text-sm m-4 md:m-2"
              onClick={() => props.toggleProductFocus({ active: false })}
            >
              Back
            </button>
          ) : null}
          <h4
            className="mb-[-1rem] lg:mb-[0rem] 3xl:mb-[0rem] self-center font-bold lg:text-xl
  text-lg text-center 3xl:text-4xl  md:text-sm"
          >
            {props.productFocus.shortDescription}
          </h4>
          <div className="relative lg:h-[13rem] lg:w-[40rem] md:h-[8rem] md:w-[25rem] h-[6rem] w-[17rem] 3xl:w-[75rem] 3xl:h-[25rem]">
            <Image
              alt={props.productFocus.nutritionFactImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.nutritionFactImage}
            />
          </div>
          <RichText
            className="text-sm lg:text-base 3xl:text-lg md:text-xs"
            data={props.productFocus.ingredients}
          />
          {props.windowWidth < 400 ? null : (
            <h4 className="md:text-xs lg:text-xl 3xl:text-3xl">
              {props.productFocus.longDescription}
            </h4>
          )}
        </div>
      </div>
    )
  }
}
