import { Container } from '@mui/material'
import { ReactNode } from 'react'

interface IContainer {
  children: ReactNode
}

const ContainerStyled = ({ children, ...rest }: IContainer) => {
  return (
    <Container sx={{ p: '18px !important' }} {...rest}>
      {children}
    </Container>
  )
}

export default ContainerStyled
