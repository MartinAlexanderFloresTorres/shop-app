import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiSearch, FiX, FiHeart } from 'react-icons/fi'
import useApp from '../hooks/useApp'
import Logo from './Logo'
import Buscador from './Buscador'
import Footer from './Footer'
import Overflow from './Overflow'

const Header = () => {
  // ESTADOS
  const [isMovileMenu, setIsMovileMenu] = useState(false)
  const [isMovileSearch, setIsMovileSearch] = useState(true)

  // USE APP
  const { categorias, favoritos } = useApp()

  // FUNCIONES
  const handleMovileMenu = () => {
    setIsMovileMenu(!isMovileMenu)
  }

  const handleMovileSearch = () => {
    setIsMovileSearch(!isMovileSearch)
  }

  return (
    <header className='header'>
      <section className='header__container container'>
        <button className='header__menu'>
          <FiMenu onClick={handleMovileMenu} className='svg' />
        </button>

        <Logo />

        <nav className='header__navegacion'>
          <Link to='/products'>Productos</Link>
          <Link to='/categorias'>Categorias</Link>
          <Link to='/contact'>Contacto</Link>
          <Link to='/about'>Nosotros</Link>
        </nav>

        {isMovileSearch && <Buscador />}

        <div className='header__iconos'>
          <button title='Buscar' id='search-btn-toggle' onClick={handleMovileSearch}>
            <FiSearch />
          </button>

          <Link to='/favoritos' title='Favoritos'>
            <FiHeart
              style={{
                stroke: 'var(--white)',
                fill: favoritos.length > 0 ? 'var(--white)' : 'var(--red)'
              }}
            />
          </Link>
        </div>

        {isMovileMenu && (
          <Overflow>
            <div className='subNavegacion'>
              <div className='subNavegacion__top'>
                <Logo onClick={handleMovileMenu} />
                <button onClick={handleMovileMenu}>
                  <FiX className='svg' />
                </button>
              </div>
              <ul className='subNavegacion__navegacion'>
                <li>
                  <Link to='/products' onClick={handleMovileMenu}>
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to='/contact' onClick={handleMovileMenu}>
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to='/about' onClick={handleMovileMenu}>
                    Nosotros
                  </Link>
                </li>

                {categorias &&
                  categorias.map((categoria) => (
                    <li key={categoria._id}>
                      <Link to={`/categorias/${categoria._id}`} onClick={handleMovileMenu}>
                        {categoria.nombre}
                      </Link>
                    </li>
                  ))}
              </ul>

              <Footer />
            </div>
          </Overflow>
        )}
      </section>
    </header>
  )
}

export default Header
