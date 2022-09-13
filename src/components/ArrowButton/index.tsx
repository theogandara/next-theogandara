import ArrowDown from '@components/svgs/ArrowDown'
import ArrowUp from '@components/svgs/ArrowUp'
import React from 'react'
import * as S from './styles'

interface ArrowButtonProps {
  onClick?: () => void
  variant?: 'Down' | 'Up'
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  variant = 'Down'
}) => {
  return (
    <S.Button onClick={onClick}>
      {variant === 'Down' ? <ArrowDown /> : <ArrowUp />}
    </S.Button>
  )
}

export default ArrowButton
