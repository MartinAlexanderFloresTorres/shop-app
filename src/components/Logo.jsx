import { Link } from 'react-router-dom'

const Logo = ({ ...props }) => {
  return (
    <Link to={'/'} {...props} id='logo'>
      <img width={150} src='/logo.png' alt='Logo' />
    </Link>
  )
}

export default Logo
