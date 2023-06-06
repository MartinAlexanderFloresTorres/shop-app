import { Link } from 'react-router-dom'

const Categoria = ({ categoria }) => {
  const { _id, nombre } = categoria
  return (
    <Link className='categoria' to={`/categorias/${_id}`}>
      {nombre}
    </Link>
  )
}

export default Categoria
