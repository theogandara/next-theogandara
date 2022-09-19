import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import StackButton from '@components/StackButton'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React, { useEffect } from 'react'
import * as S from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Name: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-2')
    console.log(NextSection)
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <LayoutDefault>
      <div id="section-1" />
      <S.Container>
        <div data-aos="fade-up" data-aos-delay="150">
          <S.ContainerPill>
            <Pill text="Front End Developer" />
          </S.ContainerPill>

          <Title text="Théo Gândara" />
          <SubTitle text="Welcome to my portfolio !" />
        </div>
        <S.ContainerButtons>
          <ArrowButton
            onClick={() =>
              NextSection && NextSection?.scrollIntoView({ behavior: 'smooth' })
            }
          />
          <div className="only-mobile translate">
            <StackButton />
          </div>
        </S.ContainerButtons>
      </S.Container>
    </LayoutDefault>
  )
}

export default Name
