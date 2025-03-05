import type { CollectionConfig } from 'payload'

const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
  },
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: false,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: false,
    },
  ],
  timestamps: true,
}

export default Subscriptions
