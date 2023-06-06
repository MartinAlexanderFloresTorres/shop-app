import { Link } from 'react-router-dom'

const Brochure = ({ brochure }) => {
  const { archivo, nombre } = brochure
  return (
    <Link to={archivo.secure_url} target='_blank' rel='noreferrer' className='brochure'>
      {nombre}
    </Link>
  )
}

export default Brochure
