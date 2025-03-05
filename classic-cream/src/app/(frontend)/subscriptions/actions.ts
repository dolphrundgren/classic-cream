'use server'

export async function createSubscription(prevState: any, formData: FormData) {
  const returnedEmail = formData.get('email')
  return { message: returnedEmail }
}
