import { TbCar } from 'react-icons/tb'
import { TfiReload } from 'react-icons/tfi'
import { BsPatchCheck } from 'react-icons/bs'
import { GiCardPickup } from 'react-icons/gi'
import { BsTicketPerforated } from 'react-icons/bs'
import Container from './Container'
const Indicadores = () => {
  const style = {
    color: 'var(--sale)',
    width: 50,
    height: 50
  }

  return (
    <Container>
      <div className='indicadores'>
        <div className='indicador'>
          <TbCar style={style} />
          <div>
            <b>Despacho</b>
            <p>a tiempo y seguro</p>
          </div>
        </div>

        <div className='indicador'>
          <BsPatchCheck style={style} />
          <div>
            <b>99% Clientes</b>
            <p>Satisfechos</p>
          </div>
        </div>

        <div className='indicador'>
          <TfiReload style={style} />
          <div>
            <b>365 días</b>
            <p>del año vendiendo</p>
          </div>
        </div>

        <div className='indicador'>
          <GiCardPickup style={style} />
          <div>
            <b>Paga</b>
            <p>personalmente</p>
          </div>
        </div>
        <div className='indicador'>
          <BsTicketPerforated style={style} />
          <div>
            <b>Productos</b>
            <p>de calidad</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Indicadores
