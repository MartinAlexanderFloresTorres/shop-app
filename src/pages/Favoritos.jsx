import Titulo from '../components/Titulo'
import Productos from '../components/Productos'
import useApp from '../hooks/useApp'

const Favoritos = () => {
  // USE APP
  const { favoritos, loadingFavoritos } = useApp()

  return (
    <div className='container padding'>
      <Titulo>Favoritos</Titulo>

      <Productos productos={favoritos} loading={loadingFavoritos} />
    </div>
  )
}

export default Favoritos
