import type { CollectionConfig } from 'payload'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'microProductDescription',
      label: 'Micro Product Description',
      type: 'text',
      required: true,
    },
    {
      name: 'shortProductDescription',
      label: 'Short Product Description',
      type: 'text',
      required: true,
    },
    {
      name: 'longProductDescription',
      label: 'Long Product Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'butterFatPercentage',
      label: 'Butterfat Percentage',
      type: 'text',
      required: true,
    },
    {
      name: 'ingredients',
      label: 'Ingredients',
      type: 'richText',
      required: true,
    },
    {
      name: 'nutritionFactImage',
      label: 'Nutrition Fact Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'canFrontImage',
      label: 'Can Front Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'foodImage',
      label: 'Food Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    { name: 'arrayPosition', label: 'Array Position', type: 'number', required: false },
  ],
}

export default Products
