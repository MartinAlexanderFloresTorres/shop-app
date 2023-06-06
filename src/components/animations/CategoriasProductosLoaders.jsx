import BannerLoader from './BannerLoader'
import ProductosLoaders from './ProductosLoaders'

const CategoriasProductosLoaders = () => {
  return (
    <div className='mb-20'>
      <BannerLoader />
      <div className='container padding'>
        <div className='produtos__encabezado'>
          <h2>0 Productos</h2>
        </div>

        <ProductosLoaders />
      </div>
    </div>
  )
}

export default CategoriasProductosLoaders
