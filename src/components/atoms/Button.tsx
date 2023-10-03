import styled from '@emotion/styled'
import { Button, ButtonProps, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface IStyledButton extends ButtonProps {
  width?: string
  height?: string
  btntype?: string
}

interface IProps extends ButtonProps {
  icon?: ReactNode
  children: ReactNode | string
}

const VCButton = ({ icon, children, ...buttonProps }: IProps) => {
  return (
    <StyledButton {...buttonProps}>
      {icon}
      {children}
    </StyledButton>
  )
}

export default VCButton

const getBtnColor = (type: string) => {
  switch (type) {
    case 'primary':
      return '#00AB55'
    case 'secondary':
      return '#3366FF'
    case 'info':
      return '#00B8D9'
    case 'success':
      return '#36B37E'
    case 'warning':
      return '#FFAB00'
    case 'error':
      return '#FF5630'
    case 'disabled':
      return '#919EAB'
    case 'submit':
      return '#212b36'
    case 'transparent':
      return '#fff'
    default:
      return '#5BE584'
  }
}

export const StyledButton = styled(Button)<IStyledButton>`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${(props) => (props?.btntype ? getBtnColor(props?.btntype) : '#5BE584')} !important;
  color: ${(props) => (props?.btntype === 'transparent' ? '#11142D' : '#fff')};
  padding: 6px 16px;
  border-radius: 24px;
  box-shadow: 0 !important;
  transition: box-shadow 0.25s;
  &:hover {
    background: ${(props) => (props?.btntype ? getBtnColor(props?.btntype) : '#5BE584')};
    opacity: 0.7;
    box-shadow: 0 5px 20px rgba(227, 230, 236, 0.85);
  }
`
