import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__top'>
          <Logo />
        </div>

        <div className='footer__center'>
          <ul>
            <li>
              <h3>Información</h3>
            </li>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/products'>Productos</Link>
            </li>
            <li>
              <Link to='/contact'>Contacto</Link>
            </li>
            <li>
              <Link to='/about'>Nosotros</Link>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Contáctanos</h3>
            </li>
            <li>
              <p className='footer__flex'>
                <strong>Teléfono:</strong>
                <a href='tel:999748514'>999748514</a>
              </p>
            </li>
            <li>
              <p className='footer__flex'>
                <strong>Email:</strong>
                <a href='mailto:correo@gmail.com'>correo@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <strong>Dirección:</strong> Av. Cesar Vallejo 897 Independencia- Lima
              </p>
            </li>
            <li>
              <p>
                <strong>Dirección:</strong> Jr. Ucayali N°779 -B Int. Sótano 110 - Lima
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Síguenos</h3>
            </li>
            <li>
              <a href={import.meta.env.VITE_FACEBOOK_URL} target='_blank' rel='noreferrer'>
                <BsFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href={import.meta.env.VITE_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
                <BsInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a href={import.meta.env.VITE_TWITTER_URL} target='_blank' rel='noreferrer'>
                <BsTwitter />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className='footer__copyright'>
        © {new Date().getFullYear()} - Todos los derechos reservados
      </p>
    </footer>
  )
}

export default Footer
