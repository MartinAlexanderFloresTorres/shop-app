import Titulo from './Titulo'
import Productos from './Productos'
import { useQuery } from '@tanstack/react-query'
import { PRODUCTOS_RELACIONADOS } from '../services/apis/productos'

const ProductosRelacionados = ({ categoriaId, productoId }) => {
  // USE QUERY
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productosRelacionados'],
    queryFn: () => PRODUCTOS_RELACIONADOS({ categoriaId, productoId }),
    select: ({ data }) => data
  })

  if (isError) {
    return (
      <div className='container padding'>
        <p className='error'>Error: {error?.response?.data?.message}</p>
      </div>
    )
  }

  return (
    <>
      <Titulo>Productos relacionados</Titulo>
      <Productos productos={data} loading={isLoading} />
    </>
  )
}

export default ProductosRelacionados
