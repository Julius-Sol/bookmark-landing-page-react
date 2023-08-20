import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Extensions from './components/Extensions/Extensions'
import Faq from './components/Faq/Faq'
import Contact from './components/Contact/Contact'
Contact

function App() {
 
  return (
    <>
      <div className="container">
        <Nav></Nav>
        <Hero></Hero>
        <Features></Features>
        <Extensions></Extensions>
        <Faq></Faq>
      </div>
      <Contact></Contact>
    </>
  )
}

export default App
