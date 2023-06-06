import { Link } from 'react-router-dom'
import { BsCardList, BsWhatsapp } from 'react-icons/bs'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner__left'>
          <h1 className='banner__titulo'>PIZARRAS ACRÍLICAS</h1>
          <p className='banner__descripcion'>Pizarras Acrílicas con marco de Madera y Aluminio.</p>
          <p className='banner__descripcion'>Ideal para colegios, estudios, oficinas, etc.</p>

          <div className='banner__botones'>
            <Link to={'/products'} className='btn banner__boton--1 banner__boton'>
              <BsCardList />
              Ver productos
            </Link>
            <a
              href='https://api.whatsapp.com/send?phone=999748514'
              target='_blank'
              className='btn btn--whatsApp banner__boton'
              rel='noreferrer'
            >
              <BsWhatsapp />
              Contactanos
            </a>
          </div>
        </div>

        <img className='banner__right' src='/pizarras.png' alt='pizarras' />
      </div>
    </div>
  )
}

export default Banner
