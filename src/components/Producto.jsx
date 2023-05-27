import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Producto = ({ producto }) => {
  const { id, nombre, imagen } = producto
  return (
    <article className='producto'>
      <img src={imagen} alt={nombre} />
      <div className='producto__info'>
        <h3 className='producto__titulo'>{nombre}</h3>

        <Button variant='contained' color='warning'>
          <Link to={`/products/${id}`}>Ver más</Link>
        </Button>
      </div>
    </article>
  )
}

export default Producto
