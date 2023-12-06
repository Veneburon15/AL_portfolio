import './Footer.css'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div>
            <Link to='/'>
                {/* <img src="" alt="" /> */}
            </Link>
        </div>
        <div>
            <nav>
                <ul>
                    <NavLink to='/about'>Sobre Mí</NavLink>
                    <NavLink to='/proyects'>Proyectos</NavLink>
                    <NavLink to='/education'>Educación</NavLink>
                    <NavLink to='/skills'>Skills</NavLink>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer
