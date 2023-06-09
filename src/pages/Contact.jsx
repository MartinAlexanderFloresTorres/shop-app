import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import Titulo from '../components/Titulo'
import EnlaceWhatsApp from '../components/EnlaceWhatsApp'

const Contact = () => {
  return (
    <>
      <div className='loader-imagen'>
        <div
          className='fondo__banner'
          style={{
            backgroundImage: `url(/banner-5.jpg)`
          }}
        >
          <div className='container'>
            <h2>Contáctanos</h2>
            <p className='mb-20'>
              Mándanos un mensaje y te responderemos lo más pronto posible. Nuestro horario de
              atención es de Lunes a Viernes de 9:00 am a 6:00 pm.
            </p>

            <div className='contacto__redes mb-20'>
              <a href={import.meta.env.VITE_FACEBOOK_URL} target='_blank' rel='noreferrer'>
                <BsFacebook />
              </a>
              <a href={import.meta.env.VITE_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
                <BsInstagram />
              </a>
              <a href={import.meta.env.VITE_TWITTER_URL} target='_blank' rel='noreferrer'>
                <BsTwitter />
              </a>

              <a href={import.meta.env.VITE_WHATSAPP_URL} target='_blank' rel='noreferrer'>
                <BsWhatsapp />
              </a>
            </div>
            <EnlaceWhatsApp />
          </div>
        </div>
      </div>

      <section className='container contacto'>
        <Titulo>Contáctanos</Titulo>
        <div className='contacto__contenido'>
          <div className='contacto__left'>
            <div className='contacto__item'>
              <h2>TELÉFONO</h2>
              <a href='tel:999748514'>999748514</a>
            </div>
            <div className='contacto__item'>
              <h2>CORREO ELETRÓNICO</h2>
              <a href='mailto:joessperu@hotmail.com'>joessperu@hotmail.com</a>
            </div>

            <div className='contacto__item'>
              <h2>DIRECCIÓN</h2>

              <p>
                <strong>Dirección:</strong> Av. Cesar Vallejo 897 Independencia- Lima
              </p>

              <p>
                <strong>Dirección:</strong> Jr. Ucayali N°779 -B Int. Sótano 110 - Lima
              </p>
            </div>
          </div>

          <div className='contacto__right'>
            <div className='contacto__item'>
              <h2>REDES SOCIALES</h2>
              <div className='contacto__redes'>
                <a href={import.meta.env.VITE_FACEBOOK_URL} target='_blank' rel='noreferrer'>
                  <BsFacebook />
                </a>
                <a href={import.meta.env.VITE_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
                  <BsInstagram />
                </a>
                <a href={import.meta.env.VITE_TWITTER_URL} target='_blank' rel='noreferrer'>
                  <BsTwitter />
                </a>

                <a href={import.meta.env.VITE_WHATSAPP_URL} target='_blank' rel='noreferrer'>
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Titulo>Nuestras ubicaciónes</Titulo>
        <div className='contacto__contenido'>
          <div className='contacto__left'>
            <div className='contacto__item'>
              <h2>
                <strong>Dirección:</strong> Av. Cesar Vallejo 897 Independencia- Lima
              </h2>

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7593745882723!2d-77.05368712406707!3d-11.991144940869448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfac06db46cd%3A0x2199a507411760d4!2sAv.%20Cesar%20Vallejo%20897%2C%20Independencia%2015332!5e0!3m2!1ses!2spe!4v1685391527878!5m2!1ses!2spe'
                width='600'
                height='450'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>

          <div className='contacto__right'>
            <div className='contacto__item'>
              <h2>
                <strong>Dirección:</strong> Jr. Ucayali N°779 -B Int. Sótano 110 - Lima
              </h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.4934101851204!2d-76.91188962406319!3d-12.214834545054629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bc02858a0c2f%3A0xff7507cfb1d5fb84!2sUcayali%20779%2C%20Lima%2015822!5e0!3m2!1ses!2spe!4v1685391654452!5m2!1ses!2spe'
                width='600'
                height='450'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
