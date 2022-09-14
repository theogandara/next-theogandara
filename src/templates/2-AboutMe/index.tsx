import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const AboutMe: React.FC = () => {
  return (
    <LayoutDefault>
      <S.Container>
        <Title text="About Me" />
        <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />
      </S.Container>
    </LayoutDefault>
  )
}

export default AboutMe
