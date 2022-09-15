import React from 'react'
import * as S from './styles'

interface LayoutDefaultProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <S.Background>
      <S.BackgroundBlur>{children}</S.BackgroundBlur>
    </S.Background>
  )
}

export default LayoutDefault
