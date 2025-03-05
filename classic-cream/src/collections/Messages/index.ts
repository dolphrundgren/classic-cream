import type { CollectionConfig } from 'payload'

const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
  },
  fields: [
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
  ],
  timestamps: true,
}

export default Messages
