'use client'
import React, { useActionState } from 'react'
import Form from 'next/form'
import { createMessageOrSubscription } from '@/app/(frontend)/comms/actions'

const initialState = {
  error: false,
  complete: false,
  serverMessage: '',
  email: '',
  firstName: '',
  lastName: '',
  clientMessage: '',
}

const createSubscription = createMessageOrSubscription.bind(null, { isMessage: false })

export default function Subscribe(props: any) {
  const [state, formAction, pending] = useActionState(createSubscription, initialState)
  if (state.complete) {
    return <h1>{state.serverMessage}</h1>
  } else {
    return (
      <>
        <h1>Subscribe</h1>
        {state.error ? <h2>{state.serverMessage}</h2> : null}
        <Form action={formAction}>
          <input required={true} className="border" name="email" />
          <input className="border" name="firstName" />
          <input className="border" name="lastName" />
          <button type="submit">Test</button>
        </Form>
      </>
    )
  }
}
