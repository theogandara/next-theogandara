import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'
import 'aos/dist/aos.css'

const WorkStudy: React.FC = () => {
  let NextSection
  let PrevSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-4')
    PrevSection = document?.querySelector('#section-2')
  }

  return (
    <LayoutDefault>
      <div id="section-3" />

      <S.Container>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
          <Title text="Work and Study" />
          <Pill text="jobs history" />
          <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />
          <Pill text="academic history" />
          <SubTitle text="saljdlkasjdklasjdklasjdlkasjdklsajdklasjd" />
        </div>
        <S.ContainerButton data-aos="fade-right" data-aos-delay="200">
          <ArrowButton
            onClick={() =>
              NextSection && NextSection?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </S.ContainerButton>

        <S.ContainerButtonBack data-aos="fade-left" data-aos-delay="200">
          <ArrowButton
            variant="Up"
            onClick={() =>
              PrevSection && PrevSection?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </S.ContainerButtonBack>
      </S.Container>
    </LayoutDefault>
  )
}

export default WorkStudy
