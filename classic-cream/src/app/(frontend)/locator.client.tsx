'use client'
import Script from 'next/script'
import React, { useContext } from 'react'
import { DialogContext } from '@/providers/Dialog'

const StoreLocatorClient = (props: any) => {
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)
  const dialogMod = `h-auto flex flex-col justify-start gap-8 lg:gap-16  ${dialogIsOpen ? 'hidden' : 'bg-[#9f9067]'}`
  const dialog2Mod = `z-0 container h-[300px] lg:h-[500px] 2xl:h-[600px] flex flex-row md:justify-between justify-center ${dialogIsOpen ? 'hidden' : null}`

  return (
    <>
      <article id="where-to-buy" className={dialogMod}>
        <div className="-mt-1 h-[75px] z-10 w-full bg-[length:auto_75px] bg-repeat-x bg-[url(/api/media/file/White_Border_Down.svg)] justify-self-start"></div>
        <div className="container  lg:mt-16">
          <img
            alt="Find Some Classic Cream Near You"
            width="full"
            height="auto"
            src="/api/media/file/Near_You.svg"
          />
        </div>
        <Script src="https://lets.shop/productFirstSnippet.js?id=destini-locator" />
        <div
          id="destini-locator"
          locator-id="4570"
          locator-name="Classic Cream Where To Buy"
          alpha-code="11DA"
          client-id="classiccream"
          className="container h-auto z-0 mb-8 rounded-2xl overflow-hidden"
        />
        <div className="-mb-1 h-[75px] z-10 w-full bg-[length:auto_75px] bg-repeat-x bg-[url(/api/media/file/White_Border_Up.svg)] justify-self-end"></div>
      </article>
      <div className={dialog2Mod}>
        <div className="hidden md:block z-40 md:w-3/4 h-auto flex-row self-end -ml-64 -mb-32">
          <img
            alt="Pastry with whipped puff"
            width="full"
            height="auto"
            src="/api/media/file/SC_Usage1_Resized.png"
          />
        </div>
        <div
          className="h-full w-3/4 md:w-1/2 lg:w-[400px] gap-4 z-20 
  flex flex-col justify-center "
        >
          <img alt="Follow Us!" width="full" height="auto" src="/api/media/file/Follow%20Us.svg" />
          <div className="w-full flex flex-row justify-between">
            <a className="w-1/2 h-full" href="https://www.instagram.com/classiccreamofficial_/">
              <img
                alt="Instagram Icon"
                width="90%"
                height="auto"
                src="/api/media/file/IG_logo.svg"
              />
            </a>
            <a
              className="w-1/2 h-full"
              href="https://www.facebook.com/people/Classic-Cream/61572215256926/"
            >
              <img
                alt="Facebook Icon"
                width="90%"
                height="auto"
                src="/api/media/file/facebook_logo.svg"
              />
            </a>
          </div>
          <div className="-mb-1 h-[75px] z-10 w-full bg-[length:auto_75px] bg-repeat-x bg-[url(/api/media/file/White_Border_Up.svg)] justify-self-end"></div>
        </div>
      </div>
    </>
  )
}

export default StoreLocatorClient
