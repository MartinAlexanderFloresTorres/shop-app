import Indicadores from '../components/Indicadores'

const About = () => {
  return (
    <section className='container nosotros'>
      <div className='nosotros__contenido'>
        <img className='nosotros__banner' src='/banner_pirzarras.jpg' alt='' />
        <div className='nosotros__info'>
          <h2 className='nosotros__titulo'>Sobre nosotros</h2>

          <p className='nosotros__descripcion'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, molestias! Reprehenderit
            iusto velit sed voluptate vitae natus corrupti deserunt cupiditate mollitia nostrum quam
            reiciendis est, laudantium beatae fugiat voluptates vel ducimus nobis quas eveniet
            suscipit? Blanditiis voluptates exercitationem praesentium amet nostrum eos ex veniam
            quaerat corrupti, ducimus nulla odit excepturi!
          </p>
        </div>
      </div>

      <Indicadores />
    </section>
  )
}

export default About
