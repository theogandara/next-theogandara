import ArrowButton from '@components/ArrowButton'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React, { useEffect } from 'react'
import * as S from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutMe: React.FC = () => {
  let NextSection
  let PrevSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-3')
    PrevSection = document?.querySelector('#section-1')
  }

  return (
    <LayoutDefault>
      <div id="section-2" />

      <S.Container>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
          <Title text="About Me" />
          <SubTitle
            text="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
         ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt
         reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna
         nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip
            deserunt reprehenderit elit laborum."
          />
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

export default AboutMe
