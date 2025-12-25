// app/actions.ts
'use server'

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const agree = formData.get('agree') === 'on'

  if (!agree) {
    return { error: 'Нужно согласиться с политикой' }
  }

  // TODO: создаём пользователя в БД / вызываем API
  console.log({ email, password })
  return { success: true }
}
