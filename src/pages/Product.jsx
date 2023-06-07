import { Link, useParams } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { useMutation } from '@tanstack/react-query'
import EnlaceWhatsApp from '../components/EnlaceWhatsApp'
import HTMLViewer from '../components/HTMLViewer'
import productoMapper from '../functions/productoMapper'
import Brochures from '../components/Brochures'
import ProductoDetalleLoader from '../components/animations/ProductoDetalleLoader'
import { OBTENER_PRODUCTO_BY_ID } from '../services/apis/productos'
import ProductosRelacionados from '../components/ProductosRelacionados'
import { useEffect } from 'react'

const Product = () => {
  const { id } = useParams()
  // USE MUTATION
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationKey: ['producto'],
    mutationFn: () => OBTENER_PRODUCTO_BY_ID({ id }),
    retry: 1
  })

  useEffect(() => {
    mutate()
  }, [id, mutate])

  if (isLoading) return <ProductoDetalleLoader />

  if (isError) {
    return (
      <div className='container padding'>
        <p className='error'>Error: {error?.response?.data?.message}</p>
      </div>
    )
  }

  if (!data) return null

  const producto = productoMapper(data.data)

  return (
    <div className='container'>
      <div className='productoDetalle'>
        <div className='productoDetalle__indicador'>
          <Link to={'/'}>Inicio</Link>
          <BiChevronRight />
          <Link to={`/categorias/${producto.categoria._id}`}>{producto.categoria.nombre}</Link>
          <BiChevronRight />
          <Link to={`/products/${producto._id}`}>{producto.titulo}</Link>
        </div>

        <div className='productoDetalle__contenedor'>
          <div className='productoDetalle__imagen'>
            <img src={producto.imagen.secure_url} alt={producto.titulo} />
          </div>

          <div className='productoDetalle__detalle'>
            <div className='productoDetalle__info'>
              <h2>{producto.titulo}</h2>

              <p className='productoDetalle__descripcion'>{producto.descripcion}</p>

              <EnlaceWhatsApp />
            </div>

            <div className='detalleProducto__compartir'>
              <h2>Comparte con tus amigos</h2>
              <div className='detalleProducto__compartir--redes'>
                <a href={import.meta.env.VITE_FACEBOOK_URL} target='_blank' rel='noreferrer'>
                  Facebook
                </a>
                <a href={import.meta.env.VITE_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
                  Instagram
                </a>
                <a href={import.meta.env.VITE_TWITTER_URL} target='_blank' rel='noreferrer'>
                  Twitter
                </a>
                <a
                  href={
                    import.meta.env.VITE_WHATSAPP_URL +
                    ` te comparto este producto: ${producto.titulo} ${window.location.href}`
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  Whatsapp
                </a>
              </div>
            </div>

            <Brochures />
          </div>
        </div>

        <div className='productoDetalle__caracteristicas'>
          <h2 className='productoDetalle__caracteristicas-titulo'>Caracteristicas</h2>
          <div className='productoDetalle__caracteristicas-contenido'>
            <HTMLViewer html={producto.caracteristicas} />
          </div>
        </div>

        <ProductosRelacionados categoriaId={producto.categoria._id} productoId={producto._id} />
      </div>
    </div>
  )
}

export default Product
