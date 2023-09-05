import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '@/libs/firebase'
import styled from '@emotion/styled'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import style from '@/styles/signup.module.scss'
import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'
import { GoogleIcon } from '@/components/atoms/Icons'
import { signUp } from '@/services/user'
import { FieldValues, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Link from 'next/link'

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('This field is required'),
  fullName: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required')
})

const SignupPage = () => {
  const formOptions = { resolver: yupResolver(signupSchema) }
  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    ...formOptions
  })
  const { errors } = formState
  const router = useRouter()

  const onSignup = (data: FieldValues) => {
    const { email, fullName, password } = data
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user: any) => {
        const userData = {
          email,
          fullName,
          id: user?.user?.uid
        }
        await signUp(userData)
        alert('Signup success!')
        router.push('/auth/signin')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <SignupContainer>
      <div className={style.base}>
        <div className={style.container}>
          <div className={style.title}>Hi 👋, let’s get familiar.</div>
          <div className={style.subtitle}>{"Let's create forms and collect submissions"}</div>
          <div className={style.flatform_action}>
            <Button startIcon={<GoogleIcon />} fullWidth className='base-btn__white'>
              Continue with Google
            </Button>
          </div>
          <p className={style.text_other}>
            <span>or Sign up with email</span>
          </p>
          <Box component='form' noValidate autoComplete='off' className={style.form} onSubmit={handleSubmit(onSignup)}>
            <TextField
              {...register('fullName')}
              size='small'
              fullWidth
              error={!!errors?.fullName}
              label='Full name'
              helperText={errors.fullName?.message as string}
              className={style.input}
            />
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
              Register
            </Button>
          </Box>
          <Link href={'/auth/signin'} className={style.link}>
            <p>I have account</p>
          </Link>
        </div>
      </div>
    </SignupContainer>
  )
}

const SignupContainer = styled.div`
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

export default SignupPage
