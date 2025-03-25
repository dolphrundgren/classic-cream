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
          className="w-[250px] xs:w-[250px] md:w-[250px] lg:w-[300px]  snap-center  bg-gray-200 rounded-xl flex flex-col items-center justify-end"
        >
          <div
            className="relative h-[500px] w-[125px] xs:h-[400px]
  xs:w-[100px] m-4 snap-center lg:w-[150px] 2xl:w-[150px] lg:h-[525px]"
          >
            <Image
              className="snap-center object-cover"
              fill
              alt={doc.canFrontImage.alt}
              src={doc.canFrontImage.url}
            />
          </div>
        </div>
      )
    })
    return productArray
  }
}
