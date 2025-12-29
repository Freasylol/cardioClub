'use client'

import googleLogo from '../../public/images/google__logo.png';
import Image from 'next/image';
import { useState } from 'react'
import { registerUser } from '../actions/loginformAction';
import Button from './Button';
import styles from '../styles/SignUpForm.module.css';

export default function SignUpForm() {
  const [message, setMessage] = useState<string | null>(null)

  async function handleAction(formData: FormData) {
    const res = await registerUser(formData)
    if (res?.error) setMessage(res.error)
    if (res?.success) setMessage('Вы успешно зарегистрированы!')
  }

  return (
      <div className={styles.card}>
        <h1 className={styles.title}>Регистрация</h1>

        <div className={styles.switchers}>
                <Button type="button"
                fontSize="0.9375rem" 
                padding="0.5rem 3.125rem" 
                borderRadius="1.25rem">
                по почте
                </Button>
            <button type="button" className={styles.switcher__google}>
                <Image src={googleLogo} alt='' className={styles.google__logo}></Image>
                <span>через Google</span>
            </button>
        </div>

        <form action={handleAction} className={styles.form}>
            <div>
                <label className={styles.label}>Ваш e-mail</label>
                <input
                type="email"
                name="email"
                required
                placeholder="Введите ваш e-mail"
                className={styles.input}
                />
            </div>

            <div>
                <label className={styles.label}>Ваш пароль</label>
                <input
                type="password"
                name="password"
                required
                placeholder="Введите ваш пароль"
                className={styles.input}
                />
            </div>

            <label className={styles.checkboxLabel}>
                <input type="checkbox" name="agree" className={styles.checkbox} />
                <span>Я согласен с политикой обработки данных</span>
            </label>

            <a href="/login" className={styles.loginLink}>
                У меня уже есть аккаунт
            </a>

            {message && <p className={styles.error}>{message}</p>}

                <Button type="submit"
                fontSize="0.9375rem" 
                padding="1rem 5rem" 
                borderRadius="0.625rem">
                    Зарегистрироваться
                </Button>
        </form>
      </div>
    // </div>
  )
}
