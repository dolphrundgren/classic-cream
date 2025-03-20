'use client'

import React from 'react'

interface SvgExButton {
  setContactState: any
}

export const SvgExButton = (props: SvgExButton) => {
  const rightEx = 'M 2 2 L 37 37 L 40 37 L 5 2'
  const leftEx = 'M 0 38 L 38 0 L 38 3 L 3 38'
  return (
    <div onClick={() => props.setContactState(false)} className="w-24  h-24 relative">
      <svg
        className="z-80 absolute top-0 right-0 left-0 bottom-0 m-auto"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="35" cx="40" cy="40" fill="gray" />
      </svg>
      <svg
        className="z-90 absolute top-0 left-0 right-0 bottom-0 m-auto"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={rightEx} stroke="white" fill="white" strokeWidth="1" />
      </svg>
      <svg
        className="z-90 absolute top-0 left-0 right-0 bottom-0 m-auto"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={leftEx} stroke="white" fill="white" strokeWidth="1" />
      </svg>
    </div>
  )
}
