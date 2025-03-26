import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Premium Ingredients, Whipped to Perfection.',
  images: [
    {
      url: `${getServerSideURL()}/api/media/file/og_pancakes.jpg`,
    },
  ],
  siteName: 'Classic Cream Whipped Cream',
  title: 'Classic Cream Whipped Cream',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
