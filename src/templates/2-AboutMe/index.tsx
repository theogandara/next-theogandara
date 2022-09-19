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

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-3')
    console.log(NextSection)
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <LayoutDefault>
      <div id="section-2" />

      <S.Container>
        <div data-aos="fade-up">
          <Title text="About Me" />
          <SubTitle
            text="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
         ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt
         reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna
         nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip
            deserunt reprehenderit elit laborum."
          />
        </div>
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
