import React from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

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
    return <div>Empty</div>
  } else {
    return (
      <div
        className="w-[calc(100vw-15vw)] lg:h-[calc(100vh-10rem)] flex lg:flex-row
  flex-col bg-[#efe0cc] place-self-center rounded-xl"
      >
        <div className="flex flex-col lg:place-items-start place-items-center">
          <div className="flex flex-col place-items-center h-[4rem] w-[8rem] mt-5 bg-[#d9d9d9]">
            <h5>{`${props.productFocus.butterfat}%`}</h5>
            <h5>BUTTER FAT</h5>
          </div>
          <div className="relative h-[30rem] w-[15rem] lg:h-[50rem] lg:w-[25rem]">
            <Image
              alt={props.productFocus.canFrontImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.canFrontImage}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <button onClick={() => props.toggleProductFocus(false)}>UnFocus</button>
          <h4>{props.productFocus.shortDescription}</h4>
          <div className="relative h-[5rem] w-[15rem] lg:h-[10rem] lg:w-[30rem]">
            <Image
              alt={props.productFocus.nutritionFactImageAlt}
              className="object-cover"
              fill
              src={props.productFocus.nutritionFactImage}
            />
          </div>
          <RichText data={props.productFocus.ingredients} />
          <h4 className="bg-blue-50">{props.productFocus.longDescription}</h4>
        </div>
      </div>
    )
  }
}
