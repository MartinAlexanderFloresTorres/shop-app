import categoriaMapper from '../functions/categoriaMapper'
import useApp from '../hooks/useApp'
import Categoria from './Categoria'
import CategoriasLoaders from './animations/CategoriasLoaders'

const Categorias = () => {
  const { categorias, isLoadingCategorias } = useApp()

  if (isLoadingCategorias) return <CategoriasLoaders />

  const categoriasMap = categorias.map(categoriaMapper)

  if (categoriasMap.length === 0) {
    return <p className='mensage mb-10'>No hay categorias</p>
  }

  return (
    <section className='categorias'>
      {categoriasMap.map((categoria) => (
        <Categoria key={categoria._id} categoria={categoria} />
      ))}
    </section>
  )
}

export default Categorias
