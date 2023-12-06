import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link to='/'>
                {/* <img src={Logo} alt="" /> */}
            </Link>
            <ul>
                <NavLink to='/about'>Sobre Mí</NavLink>
                <NavLink to='/proyects'>Proyectos</NavLink>
                <NavLink to='/education'>Educación</NavLink>
                <NavLink to='/skills'>Skills</NavLink>
                <NavLink to='/contact'>Contacto</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar