import { Link } from 'react-router-dom'
import Titulo from '../../components/Titulo'
import CategoriasAdmin from '../../components/admin/CategoriasAdmin'

const AdminCategorias = () => {
  return (
    <div className='padding container'>
      <Titulo>
        <div className='flex w-full justify-between '>
          <span>Mis Categorias</span>
          <Link className='btn btn--1' to={`/admin/categorias/new`}>
            Nueva Categoria
          </Link>
        </div>
      </Titulo>
      <CategoriasAdmin />
    </div>
  )
}

export default AdminCategorias
