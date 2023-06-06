import { useSearchParams } from 'react-router-dom'
import Productos from '../components/Productos'
import Titulo from '../components/Titulo'
import { useMutation } from '@tanstack/react-query'
import { BUSCAR_PRODUCTOS } from '../services/apis/productos'
import { useEffect } from 'react'

const Search = () => {
  // USE LOCATION
  const [search] = useSearchParams()

  // USE MUTATION
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: ['search'],
    mutationFn: () => BUSCAR_PRODUCTOS({ query: search.get('q') })
  })

  // USE EFFECT
  useEffect(() => {
    mutate()
  }, [mutate, search])

  if (isError)
    return (
      <div className='container padding'>
        <p className='error'>Error: {error?.response?.data?.message}</p>
      </div>
    )

  return (
    <div className='container padding'>
      <Titulo>Busqueda {search.get('q')}</Titulo>

      {data && <Productos productos={data.data} loading={isLoading} />}
    </div>
  )
}

export default Search
