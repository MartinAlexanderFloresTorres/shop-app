import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'
import Logo from './Logo'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

const Header = () => {
  const [isMovileMenu, setIsMovileMenu] = useState(false)
  const [isMovileSearch, setIsMovileSearch] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScroll(window.scrollY > 200)
    })
  }, [])

  const handleMovileMenu = () => {
    setIsMovileMenu(!isMovileMenu)
  }

  const handleMovileSearch = () => {
    setIsMovileSearch(!isMovileSearch)
  }

  return (
    <>
      <header className='header'>
        <div className='header__desktop'>
          <div className='container'>
            <div className='header__center'>
              <Logo />
              <Buscador />
            </div>
          </div>

          <div className='header__bottom'>
            <div className='container'>
              <Link className='header__bottom-item' to='/'>
                Inicio
              </Link>
              <Link className='header__bottom-item' to='/products'>
                Productos
              </Link>
              <Link className='header__bottom-item' to='/contact'>
                Contacto
              </Link>
              <Link className='header__bottom-item' to='/about'>
                Nosotros
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className={`header__movile ${isScroll ? 'active' : ''}`}>
        <div className='container'>
          <div className='header__movile-left'>
            <button className='btn' onClick={handleMovileMenu}>
              {isMovileMenu ? <FiX /> : <FiMenu />}
            </button>

            <Logo />
          </div>

          <div className='header__movile-right'>
            <button className='btn' onClick={handleMovileSearch}>
              <FiSearch />
            </button>
          </div>
        </div>

        {isMovileSearch && (
          <div className='container buscador__flotante'>
            <Buscador />
          </div>
        )}

        {isMovileMenu && (
          <div className='menu__flotante'>
            <div className='menu__flotante-top'>
              <Logo onClick={handleMovileMenu} />
              <button className='btn' onClick={handleMovileMenu}>
                <FiX />
              </button>
            </div>
            <div className='menu__flotante-container'>
              <Link className='menu__flotante-item' to='/' onClick={handleMovileMenu}>
                Inicio
              </Link>
              <Link className='menu__flotante-item' to='/products' onClick={handleMovileMenu}>
                Productos
              </Link>
              <Link className='menu__flotante-item' to='/contact' onClick={handleMovileMenu}>
                Contacto
              </Link>
              <Link className='menu__flotante-item' to='/about' onClick={handleMovileMenu}>
                Nosotros
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Header
