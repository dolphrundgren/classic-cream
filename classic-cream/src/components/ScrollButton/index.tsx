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
  const rightArrow = 'M 0 0 L 50 25 L 0 50 L 0 0'
  const leftArrow = 'M 50 50 L 0 25 L 50 0 L 50 50'
  const svgPath = props.isRight ? rightArrow : leftArrow
  const targetId = props.isRight ? 'Zero Sugar' : 'Heavy Whipped Cream'
  return (
    <div onClick={() => scrollToElement(targetId)} className="w-24  h-24 relative">
      <svg
        className="z-0 absolute top-0 right-0 left-0 bottom-0 m-auto"
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="45" cx="50" cy="50" fill="black" />
      </svg>
      <svg
        className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} stroke="white" fill="white" strokeWidth="1" />
      </svg>
    </div>
  )
}
