import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProductArray = (props: any) => {
  if (!props.products) {
    return null
  } else {
    const productCount = props.products.docs.length
    const productArray = props.products.docs.map(function (doc: any, index: number) {
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
      }
      return (
        <div
          id={doc.title}
          key={index}
          onClick={
            props.productFocus.active ? () => null : () => props.toggleProductFocus(productJSON)
          }
          className={`h-[35rem] w-[35rem] lg:h-[45rem] lg:w-[20rem]
  snap-center  bg-gray-200 rounded-xl flex flex-col items-center justify-items-center`}
        >
          <div className="relative lg:h-[38rem] lg:w-[20rem] h-[30rem] w-[15rem]">
            <Image
              className="object-cover"
              fill
              alt={doc.canFrontImage.alt}
              src={doc.canFrontImage.url}
            />
          </div>
          <h3 className="font-bold text-xl">{doc.title}</h3>
          <h4>{doc.microProductDescription}</h4>
        </div>
      )
    })
    return productArray
  }
}
