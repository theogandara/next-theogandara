import React from 'react'
import * as S from './styles'

interface ArrowButtonProps {
  onClick: () => void
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
  return <S.Button onClick={onClick}></S.Button>
}

export default ArrowButton
