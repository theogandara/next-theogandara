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
        <S.Flex data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
          <Title text="Work and Study" />

          <S.Section>
            <S.ContainerPill>
              <Pill text="jobs history" />
            </S.ContainerPill>
            <SubTitle text="Dev. Front-End Hexalab Soluções em Software - 05/22 -> Atual" />
            <SubTitle text="Peer Coach (monitoria) Kenzie Academy - 01/22 -> 04/22" />
            <SubTitle text="Analista de Suporte Arrow It - 01/20 -> 07/21" />
          </S.Section>

          <S.Section>
            <S.ContainerPill>
              <Pill text="academic history" />
            </S.ContainerPill>
            <SubTitle text="Ciência da Computação Impacta - 01/20 -> Cursando" />
            <SubTitle text="Desenvolvimento Web Fullstack Kenzie Academy - 06/21 -> 07/22" />
          </S.Section>
        </S.Flex>

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
