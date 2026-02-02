import React from 'react';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import WorkExperience from './Components/WorkExperience';
import Education from './Components/Education';
import GithubStats from './Components/GithubStats'; 

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      
      <Header />

      <Profile />       

      <Education />      
      
      <WorkExperience /> 
      
      <Projects />       
      
      <Skills />        
      
      <GithubStats />
      
      <Footer />        
      
    </div>
  )
}

export default App;