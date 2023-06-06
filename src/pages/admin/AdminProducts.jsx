import { Link } from 'react-router-dom'
import Titulo from '../../components/Titulo'
import ProductosAdmin from '../../components/admin/ProductosAdmin'
import useApp from '../../hooks/useApp'

const AdminProducts = () => {
  // USE APP
  const { productos, isLoadingProductos } = useApp()

  return (
    <div className='container padding'>
      <Titulo>
        <div className='flex w-full justify-between '>
          <span>Mis productos</span>
          <Link className='btn btn--1' to={`/admin/products/new`}>
            Nuevo producto
          </Link>
        </div>
      </Titulo>
      <ProductosAdmin productos={productos} loading={isLoadingProductos} />
    </div>
  )
}

export default AdminProducts
