import useApp from '../../hooks/useApp'
import CategoriasLoaders from '../animations/CategoriasLoaders'
import CategoriaAdmin from './CategoriaAdmin'

const CategoriasAdmin = () => {
  const { categorias, isLoadingCategorias } = useApp()

  if (isLoadingCategorias) return <CategoriasLoaders />

  if (categorias.length === 0) return <p className='mensage'>No hay categorias</p>

  return (
    <div className='categorias'>
      {categorias.map((categoria) => (
        <CategoriaAdmin key={categoria._id} categoria={categoria} />
      ))}
    </div>
  )
}

export default CategoriasAdmin
