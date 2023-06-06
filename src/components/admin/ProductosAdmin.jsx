import productoMapper from '../../functions/productoMapper'
import ProductosLoaders from '../animations/ProductosLoaders'
import ProductoAdmin from './ProductoAdmin'

const ProductosAdmin = ({ productos = [], loading }) => {
  const isProductosEmpty = productos.length === 0

  if (loading) return <ProductosLoaders />

  if (isProductosEmpty) return <p className='mensage'>No hay productos</p>

  const mappedProductos = productos.map(productoMapper)

  return (
    <div className='productos'>
      {mappedProductos.map((producto) => (
        <ProductoAdmin key={producto._id} producto={producto} />
      ))}
    </div>
  )
}

export default ProductosAdmin
