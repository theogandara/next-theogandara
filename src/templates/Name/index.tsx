import ArrowButton from '@components/ArrowButton'
import Pill from '@components/Pill'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import LayoutDefault from 'layouts/LayoutDefault'
import React from 'react'
import * as S from './styles'

const Name: React.FC = () => {
  return (
    <LayoutDefault>
      <S.Container>
        <S.ContainerPill>
          <Pill text="Front End Developer" />
        </S.ContainerPill>

        <Title text="Théo Gândara" />
        <SubTitle text="Seja bem-vindo ao meu portifólio ! ainda não terminei :)" />

        <S.ContainerButtons>
          <ArrowButton />
          <div className="only-mobile">
            <ArrowButton />
          </div>
        </S.ContainerButtons>
      </S.Container>
    </LayoutDefault>
  )
}

export default Name
