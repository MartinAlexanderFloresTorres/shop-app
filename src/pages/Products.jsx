import Productos from '../components/Productos'
import Titulo from '../components/Titulo'
import useApp from '../hooks/useApp'

const Products = () => {
  // USE APP
  const { productos, isLoadingProductos } = useApp()

  return (
    <>
      <div className='loader-imagen'>
        <div
          className='fondo__banner'
          style={{
            backgroundImage: `url(/banner-4.jpg)`
          }}
        >
          <div className='container'>
            <h2>Productos</h2>
            <p>
              Encuentra los mejores productos de la mejor calidad, con los mejores precios y con la
              mejor atención.
            </p>
          </div>
        </div>
      </div>

      <div className='container padding'>
        <Titulo>Productos</Titulo>
        <Productos productos={productos} loading={isLoadingProductos} />
      </div>
    </>
  )
}

export default Products
