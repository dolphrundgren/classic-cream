'use client'
import React, { useActionState, useEffect, useContext } from 'react'
import Form from 'next/form'
import { createMessageOrSubscription } from '@/app/(frontend)/comms/actions'
import { SvgExButton } from '@/components/ExButton/index'
import { DialogContext } from '@/providers/Dialog'

const initialState = {
  error: false,
  complete: false,
  serverMessage: '',
  email: '',
  firstName: '',
  lastName: '',
  message: '',
}

const createMessage = createMessageOrSubscription.bind(null, { isMessage: true })

export default function Message(props: any) {
  const { dialogIsOpen, toggleDialog } = useContext(DialogContext)
  const [state, formAction, pending] = useActionState(createMessage, initialState)
  useEffect(() => {
    if (state.complete) {
      const completionLag = setTimeout(() => toggleDialog(dialogIsOpen), 2000)

      return () => {
        clearTimeout(completionLag)
      }
    }
  }, [state.complete])

  return (
    <div
      className="w-full p-4 h-full fixed m-auto bg-white flex gap-4
    flex-col"
    >
      <button
        className="self-end bg-[#9f9067] w-1/3 rounded-xl text-xl"
        onClick={() => toggleDialog(dialogIsOpen)}
      >
        Back
      </button>
      <h1 className="text-2xl text-center">Reach out to us!</h1>
      {state.error ? <h2>{state.serverMessage}</h2> : null}
      <Form className="flex flex-col gap-4 justify-start" action={formAction}>
        <h4>Email:</h4>
        <input required={true} className="border" name="email" />
        <h4>First Name:</h4>
        <input className="border" name="firstName" />
        <h4>Last Name:</h4>
        <input className="border" name="lastName" />
        <h4>Message:</h4>
        <textarea className="h-32 border" name="clientMessage" />
        <button className="font-bold text-2xl" type="submit">
          Submit
        </button>
      </Form>
      {state.complete ? <h1 className="text-xl">{state.serverMessage}</h1> : null}
    </div>
  )
}
