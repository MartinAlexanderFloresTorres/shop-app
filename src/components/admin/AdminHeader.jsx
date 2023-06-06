import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { BiLogOutCircle } from 'react-icons/bi'
import Buscador from '../Buscador'
import Logo from '../Logo'
import Overflow from '../Overflow'

const AdminHeader = () => {
  // ESTADOS
  const [isMovileMenu, setIsMovileMenu] = useState(false)
  const [isMovileSearch, setIsMovileSearch] = useState(false)

  // USE NAVIGATE
  const navigate = useNavigate()

  // FUNCIONES
  const handleMovileMenu = () => {
    setIsMovileMenu(!isMovileMenu)
  }

  const handleMovileSearch = () => {
    setIsMovileSearch(!isMovileSearch)
  }

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  return (
    <header className='header'>
      <section className='header__container container'>
        <button className='header__menu'>
          <FiMenu onClick={handleMovileMenu} className='svg' />
        </button>

        <Logo />

        <nav className='header__navegacion'>
          <Link to='/admin/products'>Mis Productos</Link>
          <Link to='/admin/categorias'>Mis Categorias</Link>
          <Link to='/admin/products/new'>Nuevo Producto</Link>
          <Link to='/admin/categorias/new'>Nueva Categoria</Link>
          <Link to='/admin/brochure'>Brochure</Link>
        </nav>

        {isMovileSearch && <Buscador />}

        <div className='header__iconos'>
          <button title='Buscar' id='search-btn-toggle' onClick={handleMovileSearch}>
            <FiSearch />
          </button>
          <button className='btn btn--3' onClick={cerrarSesion}>
            <BiLogOutCircle />
          </button>
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
                  <Link to='/admin/products'>Mis Productos</Link>
                </li>
                <li>
                  <Link to='/admin/categorias'>Mis Categorias</Link>
                </li>
                <li>
                  <Link to='/admin/products/new'>Nuevo Producto</Link>
                </li>
                <li>
                  <Link to='/admin/categorias/new'>Nueva Categoria</Link>
                </li>
                <li>
                  <Link to='/admin/brochure'>Brochure</Link>
                </li>
              </ul>
            </div>
          </Overflow>
        )}
      </section>
    </header>
  )
}

export default AdminHeader
