import { RiHeartFill, RiHeartLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import useApp from '../hooks/useApp'

const Producto = ({ producto }) => {
  const { _id, titulo, imagen } = producto

  // USE APP
  const { favoritos, addFavoritos } = useApp()

  const isFavorito = favoritos.find((favorito) => favorito._id === _id)

  return (
    <div className='producto'>
      <div className='producto__imagen'>
        <button
          type='button'
          className={`producto__favorito ${isFavorito ? 'active' : ''}`}
          title='Agregar a favoritos'
          onClick={() => addFavoritos({ producto })}
        >
          {isFavorito ? <RiHeartFill color='var(--red)' /> : <RiHeartLine />}
        </button>

        <Link to={`/products/${_id}`} className='producto__link' title={titulo}>
          <img src={imagen.secure_url} alt={titulo} title={titulo} width='185px' height='260px' />
        </Link>

        <div className='producto__botones'>
          <a
            href={`https://api.whatsapp.com/send?phone=999748514&text=Hola, estoy interesado en el producto ${titulo} ${window.location.origin}/products/${_id}`}
            className='producto__whatsapp'
            title='Comprar en amazon'
            target='_blank'
            rel='noreferrer'
          >
            <BsWhatsapp />
          </a>
          <Link to={`/products/${_id}`} title='Visualizar producto'>
            <svg
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className='producto__description'>
        <div className='producto__title'>
          <Link to={`/products/${_id}`} title={titulo}>
            {titulo}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Producto
