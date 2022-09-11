import React from 'react'
import * as S from './styles'

interface SubTitleProps {
  text: string
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return <S.SubTitle>{text}</S.SubTitle>
}

export default SubTitle
