import React from 'react'
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
        className="w-[calc(100vw-15vw)]  lg:h-[calc(100vh-10rem)] flex lg:flex-row
  flex-col bg-[#efe0cc] lg:justify-between place-self-center rounded-xl"
      >
        <div className="flex flex-col lg:place-items-start place-items-center">
          {props.windowWidth < 400 ? (
            <div className="justify-self-end">
              <SvgExButton toggleProductFocus={props.toggleProductFocus} />
            </div>
          ) : null}
          <div className="flex rounded-r-xl flex-col place-items-center h-[10rem] w-[15rem] mt-5 bg-[#d9d9d9]">
            <h5 className="text-2xl">{`${props.productFocus.butterfat}%`}</h5>
            <h5 className="text-2xl">BUTTER FAT</h5>
          </div>
          <div className="relative h-[30rem] w-[15rem] lg:h-[80rem] lg:w-[20rem]">
            <Image
              alt={props.productFocus.canFrontImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.canFrontImage}
            />
          </div>
        </div>
        <div className="lg:w-[45rem] flex flex-col items-end justify-start">
          {props.windowWidth > 400 ? (
            <div>
              <SvgExButton toggleProductFocus={props.toggleProductFocus} />
            </div>
          ) : null}
          <h4>{props.productFocus.shortDescription}</h4>
          <div className="relative h-[5rem] w-[15rem] lg:h-[15rem] lg:w-[45rem]">
            <Image
              alt={props.productFocus.nutritionFactImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.nutritionFactImage}
            />
          </div>
          <RichText data={props.productFocus.ingredients} />
          {props.windowWidth < 400 ? null : (
            <h4 className="text-md">{props.productFocus.longDescription}</h4>
          )}
        </div>
      </div>
    )
  }
}
