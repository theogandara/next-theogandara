import Stack from '@components/svgs/Stack'
import React from 'react'
import * as S from './styles'

interface StackButtonProps {
  onClick?: () => void
  variant?: 'Down' | 'Up'
}

const StackButton: React.FC<StackButtonProps> = ({
  onClick,
  variant = 'Down'
}) => {
  return (
    <S.Button onClick={onClick}>
      <Stack />
    </S.Button>
  )
}

export default StackButton
