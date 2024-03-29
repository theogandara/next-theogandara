import Head from 'next/head'
import React from 'react'
import Name from '@templates/1-Name'
import AboutMe from '@templates/2-AboutMe'
import WorkStudy from '@templates/3-WorkStudy'
import MyProjects from '@templates/4-MyProjects'
import StudyPlan from '@templates/5-StudyPlan'
import RediredctsComponent from '@components/RediredctsComponent'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Théo Gândara</title>
        <meta
          name="description"
          content="Um blog de um desenvolvedor Front End, fã de React e novas tecnologias."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RediredctsComponent />

      <Name />
      <AboutMe />
      <WorkStudy />
      <MyProjects />
      <StudyPlan />
    </div>
  )
}

export default Home
