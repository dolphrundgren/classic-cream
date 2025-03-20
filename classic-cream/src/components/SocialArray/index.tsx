import React from 'react'
import Image from 'next/image'

export const SocialArray = (props: any) => {
  const iconStyle = `relative ${props.size === 'large' ? 'w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]' : 'w-[25px] h-[25px]'}`
  return (
    <div className="flex flex-row w-full h-full gap-8 justify-center">
      <div className={iconStyle}>
        <Image
          alt="Facebook Logo"
          className="object-cover"
          fill
          src="/api/media/file/facebook_logo.svg"
        />
      </div>
      <div className={iconStyle}>
        <Image
          alt="Facebook Logo"
          className="object-cover"
          fill
          src="/api/media/file/IG_logo.svg"
        />
      </div>
    </div>
  )
}
