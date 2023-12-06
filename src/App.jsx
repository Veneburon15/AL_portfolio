import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Logic/ScrollToTop';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import MainBody from './MainBody/MainBody';
import About from './Componentes/About/About';
import Hero from './Componentes/Hero/Hero';
import Education from './Componentes/Education/Education';
import Skills from './Componentes/Skills/Skills';
import Contact from './Componentes/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <NavBar/>
      <MainBody>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/about' element={<Proyects/>}/> */}
          <Route path='/education' element={<Education/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h2>Página en construcción</h2>}/>
        </Routes>
      </MainBody>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
