import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import Productos from '../components/Productos'
import Titulo from '../components/Titulo'
import useProductos from '../hooks/useProductos'
import EnlaceWhatsApp from '../components/EnlaceWhatsApp'

const Product = () => {
  const { productos, loading } = useProductos()

  return (
    <div className='container'>
      <div className='productoDetalle'>
        <div className='productoDetalle__indicador'>
          <Link to={'/'}>Inicio</Link>
          <BiChevronRight />
          <Link to={'/'}>Categoria</Link>
          <BiChevronRight />
          <Link to={'/'}>Engrapador mini e-10 10h negro fab 401099</Link>
        </div>

        <div className='productoDetalle__contenedor'>
          <div className='productoDetalle__imagen'>
            <img src='/producto_1.jpg' alt='name' />
          </div>

          <div className='productoDetalle__detalle'>
            <div className='productoDetalle__info'>
              <h2>Engrapador mini e-10 10h negro fab 401099</h2>

              <p className='productoDetalle__descripcion'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae
                perspiciatis accusantium ad ipsa earum ullam unde, quos aspernatur iure! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae perspiciatis
                accusantium ad ipsa earum ullam unde, quos aspernatur iure! Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Magnam repudiandae perspiciatis accusantium ad
                ipsa earum ullam unde, quos aspernatur iure! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Magnam repudiandae perspiciatis accusantium ad ipsa earum ullam
                unde, quos aspernatur iure! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Magnam repudiandae perspiciatis accusantium ad ipsa earum ullam unde, quos
                aspernatur iure!
              </p>

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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem omnis
              obcaecati quo earum voluptates! Sit, perspiciatis quos! Atque quisquam ducimus eaque
              autem deserunt itaque ullam quasi distinctio deleniti labore iste, veritatis
              cupiditate corrupti similique excepturi omnis et dolorum dignissimos obcaecati. Vitae
              expedita, nulla dolore est impedit vel maiores dolorum suscipit quod? Animi
              repudiandae ipsum eveniet reiciendis unde architecto totam assumenda? Cum, explicabo
              distinctio possimus, suscipit necessitatibus unde rerum expedita fugiat nemo soluta
              quisquam voluptas blanditiis obcaecati dolorem voluptate dignissimos architecto, quas
              adipisci voluptatem non harum dicta fuga quidem. Reiciendis ex animi ad cumque
              deleniti sint dignissimos impedit neque aliquid!
            </p>

            <h2>Caracteristicas</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>

        <Titulo>Productos relacionados</Titulo>
        <Productos productos={productos} loading={loading} />
      </div>
    </div>
  )
}

export default Product
