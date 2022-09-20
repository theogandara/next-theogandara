import ArrowButton from '@components/ArrowButton'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Ifuture from '@images/ifuture.png'

const MyProjects: React.FC = () => {
  let NextSection
  let PrevSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-5')
    PrevSection = document?.querySelector('#section-3')
  }

  return (
    <LayoutDefault>
      <div id="section-4" />

      <S.Container>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
          <Title text="My Projects" />

          <S.Flex>
            <S.Item
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="350"
            >
              <Image src={Ifuture} />
            </S.Item>
            <S.Item
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="350"
            >
              <Image src={Ifuture} />
            </S.Item>
            <S.Item
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="350"
            >
              <Image src={Ifuture} />
            </S.Item>
          </S.Flex>
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

export default MyProjects
