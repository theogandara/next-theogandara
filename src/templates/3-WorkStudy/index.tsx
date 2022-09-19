import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const WorkStudy: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-4')
    console.log(NextSection)
  }
  return (
    <LayoutDefault>
      <div id="section-3" />

      <S.Container>
        <Title text="Work and Study" />
        <Pill text="jobs history" />
        <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />
        <Pill text="academic history" />
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

export default WorkStudy
