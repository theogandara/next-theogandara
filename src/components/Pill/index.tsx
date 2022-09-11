import React from 'react'
import * as S from './styles'

interface PillProps {
  text: string
}

const Pill: React.FC<PillProps> = ({ text }) => {
  return <S.Container>{text}</S.Container>
}

export default Pill
