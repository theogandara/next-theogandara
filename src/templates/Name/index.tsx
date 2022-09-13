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
        <div style={{ marginBottom: '40px' }}>em andamento... :)</div>
        <Pill text="Front End Developer" />
        <Title text="Théo Gândara" />
        <SubTitle text="Seja bem-vindo ao meu portifólio !" />
        <ArrowButton />
      </S.Container>
    </LayoutDefault>
  )
}

export default Name
