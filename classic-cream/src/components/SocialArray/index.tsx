import React from 'react'
import Image from 'next/image'

export const SocialArray = (props: any) => {
  const rowStyle = `flex flex-row w-full h-full justify-center ${props.size == 'large' ? 'gap-8' : 'gap-2'}`
  const iconStyle = `relative ${props.size === 'large' ? 'w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]' : 'lg:w-[25px] lg:h-[25px] xl:w-[50px] xl:h-[50px]'}`
  return (
    <div className={rowStyle}>
      <a href="https://www.facebook.com/people/Classic-Cream/61572215256926/" className={iconStyle}>
        <Image
          alt="Facebook Logo"
          className="object-cover"
          fill
          src="/api/media/file/facebook_logo.svg"
        />
      </a>
      <a href="https://www.instagram.com/classiccreamofficial_/" className={iconStyle}>
        <Image
          alt="Facebook Logo"
          className="object-cover"
          fill
          src="/api/media/file/IG_logo.svg"
        />
      </a>
    </div>
  )
}
