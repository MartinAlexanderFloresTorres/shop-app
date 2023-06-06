import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='loader-imagen'>
      <div
        className='fondo__banner flex align-center justify-center'
        style={{
          backgroundImage: `url(/banner-3.jpg)`,
          height: '100vh'
        }}
      >
        <div className='container' style={{ width: 'fit-content' }}>
          <h2>
            <span>404</span> Página no encontrada
          </h2>
          <p className='mb-20'>
            La página que estás buscando no existe o no se encuentra disponible.
          </p>

          <div className='flex' style={{ width: 'fit-content' }}>
            <Link to='/' className='btn btn--1'>
              Ir a la página principal
            </Link>

            <Link to='/contact' className='btn btn--secondary'>
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
