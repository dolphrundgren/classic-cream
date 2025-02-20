import React from 'react'
import Image from 'next/image'

export const ProductArray = (props: any) => {
  if (!props.products) {
    return <div>Empty</div>
  } else {
    const productCount = props.products.docs.length
    const productArray = props.products.docs.map(function (doc: any, index: number) {
      const productJSON = {
        active: true,
        title: doc.title,
        longDescription: doc.longProductDescription,
        shortDescription: doc.shortProductDescription,
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
          onClick={props.productFocus.active ? null : () => props.toggleProductFocus(productJSON)}
          className={`h-[40rem] lg:h-[35rem] w-[20rem] snap-center lg:w-[25rem] bg-gray-200 rounded-xl flex flex-col place-items-center`}
        >
          <div className="relative h-[30rem] w-[15rem]">
            <Image
              className="object-cover"
              fill
              alt={doc.canFrontImage.alt}
              src={doc.canFrontImage.url}
            />
          </div>
          <h3>{doc.title}</h3>
          <h3>{doc.microDescription}</h3>
        </div>
      )
    })
    return productArray
  }
}
