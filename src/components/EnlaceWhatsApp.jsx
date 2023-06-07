const EnlaceWhatsApp = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=+51999748514&text=Hola!%20Quiero%20cotizar%20un%20producto%20%F0%9F%98%85'
      target='_blank'
      className='productoDetalle__whatsApp'
      rel='noreferrer'
    >
      <div className='productoDetalle__whatsApp-left'>
        <img className='productoDetalle__whatsApp-persona' src='/persona.jpg' alt='whatsApp' />
        <img className='productoDetalle__whatsApp-logo' src='/whatsApp.svg' alt='whatsApp' />
      </div>
      <div className='productoDetalle__whatsApp-right'>
        <div>
          <p>COTIZACIONES</p>
          <span>Online</span>
        </div>
        <p>¿Consultas? Chat via Whatsapp</p>
      </div>
    </a>
  )
}

export default EnlaceWhatsApp
