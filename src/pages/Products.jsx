import Productos from '../components/Productos'
import Titulo from '../components/Titulo'
import useProductos from '../hooks/useProductos'

const Products = () => {
  const { productos, loading } = useProductos()

  return (
    <div className='container padding'>
      <Titulo>Productos</Titulo>
      <Productos productos={productos} />
    </div>
  )
}

export default Products
