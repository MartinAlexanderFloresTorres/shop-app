import { FiSearch } from 'react-icons/fi'

const Buscador = () => {
  return (
    <form className='buscador'>
      <input type='text' placeholder='Escriba para hacer una búsqueda' />
      <button type='submit'>
        <FiSearch />
      </button>
    </form>
  )
}

export default Buscador
