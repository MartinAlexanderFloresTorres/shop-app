import { useSearchParams } from 'react-router-dom'
import Productos from '../components/Productos'
import Titulo from '../components/Titulo'
import useProductos from '../hooks/useProductos'

const Search = () => {
  const { productos, loading } = useProductos()

  // USE LOCATION
  const [search] = useSearchParams()

  return (
    <div className='padding'>
      <Titulo>Busqueda {search.get('q')}</Titulo>

      <Productos productos={productos} loading={loading} />
    </div>
  )
}

export default Search
