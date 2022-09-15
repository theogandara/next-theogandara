import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import StackButton from '@components/StackButton'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const Name: React.FC = () => {
  let NextSection

  if (typeof window !== 'undefined') {
    NextSection = document?.querySelector('#section-2')
    console.log(NextSection)
  }

  return (
    <LayoutDefault>
      <div id="section-1" />
      <S.Container>
        <S.ContainerPill>
          <Pill text="Front End Developer" />
        </S.ContainerPill>

        <Title text="Théo Gândara" />
        <SubTitle text="Welcome to my portfolio !" />

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
