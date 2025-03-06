'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function createMessageOrSubscription(
  ids: { isMessage: boolean },
  prevState: any,
  formData: FormData,
) {
  const payload = await getPayload({ config })
  const returnedEmail = formData.get('email') as string
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const clientMessage = formData.get('clientMessage') as string
  const errorObject = {
    complete: false,
    error: true,
    serverMessage: 'The email address you provided is not in a valid format.',
    email: returnedEmail,
    firstName: firstName,
    lastName: lastName,
  }

  if (returnedEmail === null) {
    return errorObject
  } else if (!returnedEmail.match(emailPattern)) {
    return errorObject
  } else if (ids.isMessage) {
    if (clientMessage.length < 10) {
      errorObject.serverMessage =
        'Please enter a message that is more than ten characters in length.'
      return errorObject
    }
    await payload.create({
      collection: 'messages',
      data: {
        email: returnedEmail,
        firstName: firstName,
        lastName: lastName,
        message: clientMessage,
      },
    })
    return {
      complete: true,
      error: false,
      serverMessage: 'Thank you for reaching out. We love to hear from our customers!',
      email: returnedEmail,
      firstName: firstName,
      lastName: lastName,
    }
  } else {
    await payload.create({
      collection: 'subscriptions',
      data: {
        email: returnedEmail,
        firstName: firstName,
        lastName: lastName,
      },
    })
    return {
      complete: true,
      error: false,
      serverMessage: 'Thank you for subscribing to our newsletter!',
      email: returnedEmail,
      firstName: firstName,
      lastName: lastName,
    }
  }
}
