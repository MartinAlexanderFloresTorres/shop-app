import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import EnlaceWhatsApp from '../EnlaceWhatsApp'

const ProductoDetalleLoader = () => {
  return (
    <div className='container'>
      <div className='productoDetalle'>
        <div className='productoDetalle__indicador'>
          <Link to={'/'}>Inicio</Link>
          <BiChevronRight />
          <Link to={`/categorias`}>categorias</Link>
          <BiChevronRight />
          <Link to={`/products`}>cargando...</Link>
        </div>

        <div className='productoDetalle__contenedor'>
          <div className='productoDetalle__imagen'>
            <div className='loader-imagen' style={{ minHeight: 500 }} />
          </div>

          <div className='productoDetalle__detalle'>
            <div className='productoDetalle__info'>
              <h2>
                <div className='loader-imagen' style={{ minHeight: 40 }} />
              </h2>

              <div className='productoDetalle__descripcion'>
                <div className='loader-imagen' style={{ minHeight: 100 }} />
              </div>

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
          </div>
        </div>

        <div className='productoDetalle__caracteristicas'>
          <h2 className='productoDetalle__caracteristicas-titulo'>Caracteristicas</h2>
          <div className='productoDetalle__caracteristicas-contenido'>
            <div className='loader-imagen' style={{ minHeight: 40 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductoDetalleLoader
