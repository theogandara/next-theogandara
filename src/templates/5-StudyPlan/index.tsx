import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React, { useEffect } from 'react'
import * as S from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const StudyPlan: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-1')
    console.log(NextSection)
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <LayoutDefault>
      <div id="section-5" />
      <S.Container>
        <div data-aos="fade-up">
          <Title text="Study Plan" />

          <Pill text="what I'm learning" />
          <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />

          <Pill text="what I want to learn" />
          <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />
        </div>
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
