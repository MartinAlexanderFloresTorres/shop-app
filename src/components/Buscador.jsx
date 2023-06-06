import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Buscador = () => {
  // ESTADOS
  const [busqueda, setBusqueda] = useState('')

  // USE NAVIGATE
  const navigate = useNavigate()

  // FUNCIONES
  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // VALIDACION
    if (busqueda.trim() === '') return toast('Ingrese una busqueda', { icon: '🤔' })

    // SOLO NUMEROS, LETRAS Y ESPACIOS
    const regex = /^[a-zA-Z0-9\s]*$/
    if (!regex.test(busqueda))
      return toast('Ingrese solo números, letras y espacios', { icon: '🤔' })

    navigate(`/search?q=${busqueda}`)
  }

  return (
    <form className='header__form' onSubmit={handleSubmit} role='search'>
      <div className='header__item'>
        <FiSearch />
        <input type='search' placeholder='Buscar…' value={busqueda} onChange={handleChange} />
      </div>
      <button type='submit'>Buscar</button>
    </form>
  )
}

export default Buscador
