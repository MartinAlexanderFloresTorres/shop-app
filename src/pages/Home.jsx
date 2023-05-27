import Indicadores from '../components/Indicadores'
import Container from '../components/Container'
import Titulo from '../components/Titulo'
import Productos from '../components/Productos'
import useProductos from '../hooks/useProductos'

const Home = () => {
  const { productos, loading } = useProductos()
  return (
    <>
      <img width={'100%'} src='/banner_1.jpg' alt='banner 1' />

      <Indicadores />
      <Container padding={20}>
        <Titulo titulo='Productos' />
        <Productos productos={productos} loading={loading} />
      </Container>
    </>
  )
}

export default Home
