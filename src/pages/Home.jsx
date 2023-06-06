import Indicadores from '../components/Indicadores'
import Titulo from '../components/Titulo'
import Banner from '../components/Banner'
import Categorias from '../components/Categorias'
import CategoriasProductos from '../components/CategoriasProductos'

const Home = () => {
  return (
    <>
      <Banner />

      <Indicadores />

      <div className='container padding'>
        <Titulo>Categorias</Titulo>
        <Categorias />
      </div>

      <CategoriasProductos />
    </>
  )
}

export default Home
