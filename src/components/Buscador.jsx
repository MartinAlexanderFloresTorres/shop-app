import { useState } from 'react'
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
    navigate(`/search?q=${busqueda}`)
  }

  return (
    <form className='buscador' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Escriba para hacer una búsqueda'
        value={busqueda}
        onChange={handleChange}
      />
      <button type='submit'>
        <FiSearch />
      </button>
    </form>
  )
}

export default Buscador
