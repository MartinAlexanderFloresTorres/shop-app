import Indicadores from '../components/Indicadores'
import Container from '../components/Container'
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
      <Container padding={20}>
        <Titulo>Productos</Titulo>
        <Productos productos={productos} loading={loading} />
      </Container>
    </>
  )
}

export default Home
