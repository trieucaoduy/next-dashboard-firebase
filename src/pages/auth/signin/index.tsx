import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '@/libs/firebase'
import styled from '@emotion/styled'
import { signInWithEmailAndPassword } from 'firebase/auth'
import style from '@/styles/signup.module.scss'
import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'
import { GoogleIcon } from '@/components/atoms/Icons'
import { FieldValues, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { handleLocalStorage } from '@/utils'
import { STORAGE_KEY } from '@/common/constants'

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('This field is required'),
  password: Yup.string().required('This field is required')
})

const SigninPage = () => {
  const formOptions = { resolver: yupResolver(signupSchema) }
  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    ...formOptions
  })
  const { errors } = formState
  const router = useRouter()

  const onSignin = (data: FieldValues) => {
    const { email, password } = data
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user) {
          const userCredential = res.user
          sessionStorage.setItem(STORAGE_KEY.AUTH_TOKEN, userCredential.refreshToken)
          router.push('/')
        }
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <SigninContainer>
      <div className={style.base}>
        <div className={style.container}>
          <div className={style.title}>Welcome back 🤓</div>
          <div className={style.subtitle}>{"It's time to catch-up"}</div>
          <div className={style.flatform_action}>
            <Button startIcon={<GoogleIcon />} fullWidth className='base-btn__white'>
              Continue with Google
            </Button>
          </div>
          <p className={style.text_other}>
            <span>or Sign in with email</span>
          </p>
          <Box component='form' noValidate autoComplete='off' className={style.form} onSubmit={handleSubmit(onSignin)}>
            <TextField
              {...register('email')}
              size='small'
              fullWidth
              error={!!errors?.email}
              label='Email'
              helperText={errors.email?.message as string}
              className={style.input}
            />
            <TextField
              {...register('password')}
              size='small'
              fullWidth
              error={!!errors?.password}
              label='Password'
              helperText={errors.password?.message as string}
              className={style.input}
            />
            <Button fullWidth className='base-btn' type='submit'>
              Login
            </Button>
          </Box>
          <Link href='/auth/signup' className={style.link}>
            <p>{"I don't have an account"}</p>
          </Link>
        </div>
      </div>
    </SigninContainer>
  )
}

const SigninContainer = styled.div`
  position: relative;
  min-height: 100vh;
  &::before {
    background-image: url('/images/auth-left-shape.webp');
    content: '';
    width: 337px;
    height: 784px;
    background-size: cover;
    position: absolute;
    top: 15vh;
    left: 0px;
  }
  &::after {
    content: '';
    width: 337px;
    height: 784px;
    background-image: url('/images/auth-right-shape.webp');
    background-size: cover;
    position: absolute;
    top: 15vh;
    right: 0px;
  }
`

export default SigninPage
