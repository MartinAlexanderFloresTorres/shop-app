import Producto from './Producto'

const Productos = ({ productos = [], loading }) => {
  const isProductosEmpty = productos.length === 0

  if (loading) return <p className='mensage'>Cargando...</p>

  if (isProductosEmpty) return <p className='mensage'>No hay productos</p>

  return (
    <div className='productos'>
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default Productos
