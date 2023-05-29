import Indicadores from '../components/Indicadores'
import Titulo from '../components/Titulo'
import Productos from '../components/Productos'
import useProductos from '../hooks/useProductos'
import Banner from '../components/Banner'

const Home = () => {
  const { productos, loading } = useProductos()
  return (
    <>
      <Banner />

      <Indicadores />
      <div className='container padding'>
        <Titulo>Productos</Titulo>
        <Productos productos={productos} loading={loading} />
      </div>
    </>
  )
}

export default Home
