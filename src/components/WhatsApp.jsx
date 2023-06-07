import { useState } from 'react'
import { BsWhatsapp, BsSend, BsX } from 'react-icons/bs'
import EnlaceWhatsApp from './EnlaceWhatsApp'
import sendWhatsApp from '../functions/sendWhatsApp'

const DEFAULT_MESSAGE = 'Hola! Quiero cotizar un producto 😅'

const WhatsApp = () => {
  // ESTADOS
  const [isShow, setIsShow] = useState(false)
  const [mensaje, setMensaje] = useState('')

  // FUNCIONES
  const handleChange = (e) => {
    setMensaje(e.target.value)
  }

  const handleClick = () => {
    setIsShow(!isShow)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendWhatsApp({ phone: '+51999748514', message: mensaje != '' ? mensaje : DEFAULT_MESSAGE })
    setMensaje('')
  }

  return (
    <>
      {isShow && (
        <div className='whatsApp__contenido'>
          <div className='whatsApp__top'>
            <BsWhatsapp />
            <div>
              <h2>COTIZAR UN PRODUCTO</h2>
              <p>
                Hola! Click aquí para iniciar el chat vía <b>Whatsapp</b>
              </p>
            </div>
          </div>

          <div className='whatsApp__bottom'>
            <p className='whatsApp__texto'>Nuestros asesores responden pronto haga su consulta!</p>
            <EnlaceWhatsApp />
          </div>

          <form className='whatsApp__formulario' onSubmit={handleSubmit}>
            <BsWhatsapp className='whatsApp__formulario-whasap' />
            <input
              type='text'
              value={mensaje}
              onChange={handleChange}
              placeholder='Escribe algo...'
            />
            <button type='submit'>
              <BsSend />
            </button>
          </form>
        </div>
      )}

      <button className='whatsApp__btn' onClick={handleClick}>
        {isShow ? <BsX /> : <BsWhatsapp />}
      </button>
    </>
  )
}

export default WhatsApp
