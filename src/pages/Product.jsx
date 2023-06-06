import { Link, useParams } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { useQuery } from '@tanstack/react-query'
import Productos from '../components/Productos'
import Titulo from '../components/Titulo'
import EnlaceWhatsApp from '../components/EnlaceWhatsApp'
import HTMLViewer from '../components/HTMLViewer'
import productoMapper from '../functions/productoMapper'
import { OBTENER_PRODUCTO_BY_ID } from '../services/apis/productos'
import Brochures from '../components/Brochures'
import ProductoDetalleLoader from '../components/animations/ProductoDetalleLoader'

const Product = () => {
  const { id } = useParams()

  // USE QUERY
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['producto'],
    queryFn: () => OBTENER_PRODUCTO_BY_ID({ id }),
    select: ({ data }) => productoMapper(data),
    retry: 1
  })

  if (isLoading) return <ProductoDetalleLoader />

  if (isError)
    return (
      <div className='container padding'>
        <p className='error'>Error: {error?.response?.data?.message}</p>
      </div>
    )

  return (
    <div className='container'>
      <div className='productoDetalle'>
        <div className='productoDetalle__indicador'>
          <Link to={'/'}>Inicio</Link>
          <BiChevronRight />
          <Link to={`/categorias/${data.categoria._id}`}>{data.categoria.nombre}</Link>
          <BiChevronRight />
          <Link to={`/products/${data._id}`}>{data.titulo}</Link>
        </div>

        <div className='productoDetalle__contenedor'>
          <div className='productoDetalle__imagen'>
            <img src={data.imagen.secure_url} alt={data.titulo} />
          </div>

          <div className='productoDetalle__detalle'>
            <div className='productoDetalle__info'>
              <h2>{data.titulo}</h2>

              <p className='productoDetalle__descripcion'>{data.descripcion}</p>

              <EnlaceWhatsApp />
            </div>

            <div className='detalleProducto__compartir'>
              <h2>Comparte con tus amigos</h2>
              <div className='detalleProducto__compartir--redes'>
                <a href='https://www.facebook.com/'>Facebook</a>
                <a href='https://www.instagram.com/'>Instagram</a>
                <a href='https://www.twitter.com/'>Twitter</a>
                <a href='https://www.whatsapp.com/'>Whatsapp</a>
              </div>
            </div>

            <Brochures />
          </div>
        </div>

        <div className='productoDetalle__caracteristicas'>
          <h2 className='productoDetalle__caracteristicas-titulo'>Caracteristicas</h2>
          <div className='productoDetalle__caracteristicas-contenido'>
            <HTMLViewer html={data.caracteristicas} />
          </div>
        </div>

        <Titulo>Productos relacionados</Titulo>
        <Productos productos={[]} loading={false} />
      </div>
    </div>
  )
}

export default Product
