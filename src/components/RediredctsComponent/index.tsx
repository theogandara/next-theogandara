import Download from '@components/svgs/Download'
import Email from '@components/svgs/Email'
import GitHub from '@components/svgs/GitHub'
import GitLab from '@components/svgs/GitLab'
import LinkedIn from '@components/svgs/LinkedIn'
import React from 'react'
import * as S from './styles'

const RediredctsComponent: React.FC = () => {
  return (
    <S.Container>
      <S.SVG_Case
        target="_blank"
        href="https://www.linkedin.com/in/theogandara/"
      >
        <LinkedIn />
      </S.SVG_Case>
      <S.SVG_Case target="_blank" href="https://github.com/theogandara">
        <GitHub />
      </S.SVG_Case>
      <S.SVG_Case target="_blank" href="https://gitlab.com/theogandara">
        <GitLab />
      </S.SVG_Case>
      <S.SVG_Case
        target="_blank"
        href="mailto:theogandara@gmail.com?cc=theogandarajobs@gmail.com"
      >
        <Email />
      </S.SVG_Case>
      <S.Button
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/1yVvf7Uoj5rGKHQdu9nb27pWytiPO2ed2/view?usp=sharing',
            '_blank'
          )
        }
      >
        <span>Download CV</span>
        <Download />
      </S.Button>
    </S.Container>
  )
}

export default RediredctsComponent
