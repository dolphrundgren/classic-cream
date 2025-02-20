import React from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

export interface ProductFocusInterface {
  active: boolean
  title?: string
  longDescription?: string
  shortDescription?: string
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
      <div className="w-full lg:h-[calc(100vh-20rem)] flex lg:flex-row flex-col">
        <div className="flex flex-col">
          <div className="relative h-[20rem] w-[10rem]">
            <h5>{props.productFocus.butterfat}</h5>
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
          <h3>{props.productFocus.title}</h3>
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
