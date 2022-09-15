import ArrowButton from '@components/ArrowButton'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const AboutMe: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-3')
    console.log(NextSection)
  }
  return (
    <LayoutDefault>
      <div id="section-2" />

      <S.Container>
        <Title text="About Me" />
        <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />

        <S.ContainerButtons>
          <ArrowButton
            onClick={() =>
              NextSection && NextSection?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </S.ContainerButtons>
      </S.Container>
    </LayoutDefault>
  )
}

export default AboutMe
