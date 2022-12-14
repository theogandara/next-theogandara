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

  return (
    <LayoutDefault>
      <div id="section-5" />
      <S.Container>
        <S.Flex data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
          <Title text="Study Plan" />

          <S.Section>
            <S.ContainerPill>
              <Pill text="what I'm learning" />
            </S.ContainerPill>
            <SubTitle text="ReactJS - NextJs (SSR, SSG) - Redux - ChakraUi" />
          </S.Section>

          <S.Section>
            <S.ContainerPill>
              <Pill text="what I want to learn" />
            </S.ContainerPill>
            <SubTitle text="Java - VueJs - Pinia - Elixir - Zustantd " />
          </S.Section>
        </S.Flex>

        <S.ContainerButtons data-aos="fade-right" data-aos-delay="200">
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
