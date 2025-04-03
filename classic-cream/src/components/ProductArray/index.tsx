import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SvgArrow } from '@/components/ScrollButton/index'

export const ProductArray = (props: any) => {
  if (!props.products) {
    return null
  } else {
    const productCount = props.products.docs.length
    const productArray = props.products.docs.map(function (doc: any, index: number) {
      console.log(doc)
      const productJSON = {
        active: true,
        title: doc.title,
        longDescription: doc.longProductDescription,
        shortDescription: doc.shortProductDescription,
        microDescription: doc.microProductDescription,
        butterfat: doc.butterFatPercentage,
        canFrontImage: doc.canFrontImage.url,
        canFrontImageAlt: doc.canFrontImage.alt,
        nutritionFactImage: doc.nutritionFactImage.url,
        nutritionFactImageAlt: doc.nutritionFactImage.alt,
        ingredients: doc.ingredients,
        foodImage: doc.foodImage.url,
        foodImageAlt: doc.foodImage.alt,
      }
      return (
        <div
          id={doc.title}
          key={index}
          onClick={
            props.productFocus.active ? () => null : () => props.toggleProductFocus(productJSON)
          }
          className=" md:h-[50vh] md:min-w-[48%] h-[75vh]
  min-w-[32%] flex flex-row justify-center rounded-xl bg-[#cccccc]"
        >
          <img
            className="max-h-[100%]"
            height="auto"
            alt={doc.canFrontImage.alt}
            src={doc.canFrontImage.url}
          />
        </div>
      )
    })
    return productArray
  }
}
