'use client'

import React from 'react'

const scrollToElement = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

interface SvgArrowValue {
  isRight: boolean
}

export const SvgArrow = (props: SvgArrowValue) => {
  const rightArrow = 'M 17 10 L 37 25 L 17 40 L 17 36 L 33 25 L 17 14'
  const leftArrow = 'M 33 10 L 13 25 L 33 40 L 33 36 L 17 25 L 33 14'
  const svgPath = props.isRight ? rightArrow : leftArrow
  const targetId = props.isRight ? 'Zero Sugar' : 'Heavy Whipped Cream'
  return (
    <div onClick={() => scrollToElement(targetId)} className="w-24  h-24 relative">
      <svg
        className="z-80 absolute top-0 right-0 left-0 bottom-0 m-auto"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="35" cx="40" cy="40" fill="black" />
      </svg>
      <svg
        className="z-90 absolute top-0 left-0 right-0 bottom-0 m-auto"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} stroke="white" fill="white" strokeWidth="1" />
      </svg>
    </div>
  )
}
