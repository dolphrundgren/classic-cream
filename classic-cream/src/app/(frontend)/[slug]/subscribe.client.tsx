'use client'
import React, { useActionState } from 'react'
import Form from 'next/form'
import { createSubscription } from '@/app/(frontend)/subscriptions/actions'

const initialState = {
  message: 'Goodbye',
}

export default function Subscribe() {
  const [state, formAction, pending] = useActionState(createSubscription, initialState)
  return (
    <>
      <h1>Subscribe</h1>
      <h2>{`state: ${state?.message}`}</h2>
      <Form action={formAction}>
        <input className="border" name="email" />
        <input className="border" name="firstName" />
        <button type="submit">Test</button>
      </Form>
    </>
  )
}
