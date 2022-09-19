import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const StudyPlan: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-1')
    console.log(NextSection)
  }
  return (
    <LayoutDefault>
      <div id="section-5" />
      <S.Container>
        <Title text="Study Plan" />

        <Pill text="what I'm learning" />
        <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />

        <Pill text="what I want to learn" />
        <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />

        <S.ContainerButtons>
          <ArrowButton
            variant="Up"
            onClick={() =>
              NextSection && NextSection?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </S.ContainerButtons>
      </S.Container>
    </LayoutDefault>
  )
}

export default StudyPlan
