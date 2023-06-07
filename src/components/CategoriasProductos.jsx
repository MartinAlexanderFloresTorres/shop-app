import { Link } from 'react-router-dom'
import Productos from './Productos'
import useApp from '../hooks/useApp'
import CategoriasProductosLoaders from './animations/CategoriasProductosLoaders'

const CategoriasProductos = () => {
  // USE APP
  const { categoriasProductos, isLoadingCategoriasProductos } = useApp()

  if (isLoadingCategoriasProductos)
    return (
      <>
        <CategoriasProductosLoaders />
        <CategoriasProductosLoaders />
        <CategoriasProductosLoaders />
      </>
    )

  if (!categoriasProductos) {
    return (
      <div className='container padding'>
        <p className='error'>
          Error al cargar las categorias y productos, por favor intentelo más tarde
        </p>
      </div>
    )
  }

  if (categoriasProductos.length === 0) {
    return (
      <div className='container padding'>
        <div className='loader-imagen'>
          <div
            className='fondo__banner'
            style={{
              backgroundImage: `url(/banner-2.jpg)`
            }}
          >
            <div className='container'>
              <h2>No hay productos</h2>
              <p className='mb-20'>
                No hay productos en la tienda en este momento por favor vuelva más tarde o contacte
                con nosotros para más información
              </p>

              <Link to='/contact' className='btn btn--white btn--max300'>
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return categoriasProductos.map(({ categoria, productos }) => (
    <div key={categoria._id} className='mb-20'>
      <div className='loader-imagen'>
        <div
          className='fondo__banner'
          style={{
            backgroundImage: `url(${categoria.imagen.secure_url})`
          }}
        >
          <div className='container'>
            <h2>{categoria.nombre}</h2>
            <p className='mb-20'>{categoria.descripcion}</p>

            <Link to={`/categorias/${categoria._id}`} className='btn btn--white btn--max300'>
              Ver todo los productos
            </Link>
          </div>
        </div>
      </div>

      <div className='container padding'>
        <div className='produtos__encabezado'>
          <h2>{productos.length} Productos</h2>

          {productos.length > 12 && (
            <Link to={`/categorias/${categoria._id}`} className='btn btn-primary'>
              Ver más
            </Link>
          )}
        </div>
        <Productos productos={productos.slice(0, 12)} loading={false} />
      </div>
    </div>
  ))
}

export default CategoriasProductos
