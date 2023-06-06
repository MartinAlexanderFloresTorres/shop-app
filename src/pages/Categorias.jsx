import { Link } from 'react-router-dom'
import CategoriasList from '../components/Categorias'
import Productos from '../components/Productos'
import useApp from '../hooks/useApp'
import Titulo from '../components/Titulo'
import BannerLoader from '../components/animations/BannerLoader'
import CategoriasLoaders from '../components/animations/CategoriasLoaders'
import ProductosLoaders from '../components/animations/ProductosLoaders'

const Categorias = () => {
  // USE APP
  const { categoriasProductos, isLoadingCategoriasProductos } = useApp()

  if (isLoadingCategoriasProductos) {
    return (
      <>
        <BannerLoader />
        <div className='container padding'>
          <Titulo>Categorias</Titulo>
          <CategoriasLoaders />
          <div className='produtos__encabezado'>
            <h2>0 Productos</h2>
          </div>
          <ProductosLoaders />
          <div className='produtos__encabezado'>
            <h2>0 Productos</h2>
          </div>
          <ProductosLoaders />
          <div className='produtos__encabezado'>
            <h2>0 Productos</h2>
          </div>
          <ProductosLoaders />
        </div>
      </>
    )
  }
  return (
    <>
      <div className='loader-imagen'>
        <div
          className='fondo__banner'
          style={{
            backgroundImage: `url(/banner-2.jpg)`
          }}
        >
          <div className='container'>
            <h2>Categorias</h2>
            <p>
              Estas son las categorias de productos que tenemos para ti, encuentra los mejores
              productos de la mejor calidad, con los mejores precios y con la mejor atención.
            </p>
          </div>
        </div>
      </div>

      <div className='container padding'>
        <Titulo>Categorias</Titulo>
        {categoriasProductos ? (
          <>
            <CategoriasList categorias={categoriasProductos} />
            {categoriasProductos.map(({ categoria, productos }) => (
              <div key={categoria._id} className='mb-20'>
                <div className='produtos__encabezado'>
                  <h2>
                    {categoria.nombre} ({productos.length})
                  </h2>

                  <Link to={`/categorias/${categoria._id}`} className='btn btn-primary'>
                    Ver más
                  </Link>
                </div>
                <Productos productos={productos.slice(0, 12)} loading={false} />
              </div>
            ))}
          </>
        ) : (
          <h2 className='mensage'>No hay categorias</h2>
        )}
      </div>
    </>
  )
}

export default Categorias
