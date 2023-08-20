import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Extensions from './components/Extensions/Extensions'
import Faq from './components/Faq/Faq'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NavMobile from './components/Nav/NavMobile'
import { useState } from 'react'

function App() {
  const [mobileNavOpen,setMobileNavOpen] = useState(false);
  
  const HandleMobileNavOpen = () =>{
    setMobileNavOpen(true)
    document.body.style.overflowY = 'hidden'
  }

  const HandleMobileNavClose = () =>{
    setMobileNavOpen(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
      {mobileNavOpen ? <NavMobile handleCloseClick={HandleMobileNavClose}></NavMobile> : ''}
      <div className="container">
        <Nav navBoolen={mobileNavOpen} handleOpenClick={HandleMobileNavOpen}></Nav>
        <Hero></Hero>
        <Features></Features>
        <Extensions></Extensions>
        <Faq></Faq>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
