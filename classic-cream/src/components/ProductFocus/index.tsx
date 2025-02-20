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
      <div className="w-[calc(100vw-20rem)] h-[calc(100vh-20rem)]">
        <button onClick={() => props.toggleProductFocus(false)}>UnFocus</button>
        <RichText data={props.productFocus.ingredients} />
        <h3>{props.productFocus.title}</h3>
        <h4>{props.productFocus.description}</h4>
        <h5>{props.productFocus.butterfat}</h5>
        <div className="relative h-[20rem] w-[10rem]">
          <Image
            alt={props.productFocus.canFrontImageAlt}
            className="object-cover"
            fill
            src={props.productFocus.canFrontImage}
          />
        </div>
        <div className="relative h-[20rem] w-[10rem]">
          <Image
            alt={props.productFocus.nutritionFactImageAlt}
            className="object-cover"
            fill
            src={props.productFocus.nutritionFactImage}
          />
        </div>
      </div>
    )
  }
}
