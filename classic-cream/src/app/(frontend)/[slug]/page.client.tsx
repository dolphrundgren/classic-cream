'use client'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

const PageClient = (props: any) => {
  const pageData = props.pages.docs[0]
  //Hero data
  const heroImage = pageData.hero.media.sizes.large.url
  const heroRichText = pageData.hero.richText
  //Text Content
  const contentRichText = pageData.layout[0].columns[0].richText
  return <></>
}

export default PageClient
