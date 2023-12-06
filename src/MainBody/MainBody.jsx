import Hero from '../Componentes/Hero/Hero'
import About from '../Componentes/About/About'
import Education from '../Componentes/Education/Education'
import Skills from '../Componentes/Skills/Skills'
import Contact from '../Componentes/Contact/Contact'
import Proyects from '../Componentes/Proyects/Proyects'

const MainBody = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <Proyects/>
        <Education/>
        <Skills/>
        <Contact/>
    </main>
  )
}

export default MainBody