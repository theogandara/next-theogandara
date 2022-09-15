import ArrowButton from '@components/ArrowButton'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const AboutMe: React.FC = () => {
  return (
    <LayoutDefault>
      <div id="section-2" />

      <S.Container>
        <Title text="About Me" />
        <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />

        <S.ContainerButtons>
          <ArrowButton />
        </S.ContainerButtons>
      </S.Container>
    </LayoutDefault>
  )
}

export default AboutMe
