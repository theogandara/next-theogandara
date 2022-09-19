import ArrowButton from '@components/ArrowButton'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React, { useEffect } from 'react'
import * as S from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MyProjects: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-5')
    console.log(NextSection)
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <LayoutDefault>
      <div id="section-4" />

      <S.Container>
        <div data-aos="fade-up">
          <Title text="My Projects" />
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

export default MyProjects
