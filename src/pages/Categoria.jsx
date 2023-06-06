import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { OBTENER_CATEGORIA_BY_ID } from '../services/apis/categorias'
import { Link, useParams } from 'react-router-dom'
import Titulo from '../components/Titulo'
import Productos from '../components/Productos'
import BannerLoader from '../components/animations/BannerLoader'
import ProductosLoaders from '../components/animations/ProductosLoaders'

const Categoria = () => {
  // USE PARAMS
  const { id } = useParams()

  // USE QUERY
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: ['categoria'],
    mutationFn: () => OBTENER_CATEGORIA_BY_ID({ id })
  })

  // USE EFFECT
  useEffect(() => {
    mutate()
  }, [mutate, id])

  if (isLoading)
    return (
      <>
        <BannerLoader />
        <div className='container padding'>
          <Titulo>Productos</Titulo>
          <ProductosLoaders />
        </div>
      </>
    )

  if (isError)
    return (
      <div className='container padding'>
        <p className='error'>Error: {error.response.data.message}</p>
      </div>
    )

  if (!data) return null

  return (
    <>
      <div className='loader-imagen'>
        <div
          className='fondo__banner'
          style={{
            backgroundImage: `url(${data.data.categoria.imagen.secure_url})`
          }}
        >
          <div className='container'>
            <h2>{data.data.categoria.nombre}</h2>
            <p className='mb-20'>{data.data.categoria.descripcion}</p>
            <Link to={`/`} className='btn btn--white btn--max300'>
              Volver
            </Link>
          </div>
        </div>
      </div>

      <div className='padding container'>
        <Titulo>Productos</Titulo>
        <Productos productos={data.data.productos} loading={false} />
      </div>
    </>
  )
}

export default Categoria
