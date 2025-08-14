import React from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import WorkExperience from './Components/WorkExperience'

function App() {
  return (
    <>
      <Header />

      <section id="profile">
        <Profile />
      </section>

      <section id="work-experience">
        <WorkExperience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contacts">
        <Footer />
      </section>
    </>
  )
}

export default App