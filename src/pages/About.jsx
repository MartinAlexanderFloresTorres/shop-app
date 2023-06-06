import Indicadores from '../components/Indicadores'

const About = () => {
  return (
    <section className='nosotros'>
      <img
        className='nosotros__banner'
        src='/banner_pirzarras.jpg'
        alt='sobre nosotros'
        width='100%'
        height='500px'
        style={{ objectFit: 'cover' }}
      />

      <div className='container nosotros__contenido'>
        <div className='nosotros__info'>
          <h2 className='nosotros__titulo'>Sobre nosotros</h2>

          <p className='nosotros__descripcion'>
            Durante más de dos décadas, nuestra compañía se ha especializado en la creación,
            producción y venta de una amplia variedad de pizarras acrílicas y muebles en melamina y
            productos relacionados. Nuestro enfoque constante en la innovación y la calidad nos ha
            permitido obtener reconocimiento tanto en el ámbito educativo como empresarial, tanto en
            Lima como en otras provincias.
          </p>
        </div>
      </div>

      <Indicadores />
    </section>
  )
}

export default About
