import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { LOGIN_ADMIN } from '../../services/apis/usuarios'

const AdminLogin = () => {
  // ESTADOS
  const [campos, setCampos] = useState({
    email: '',
    password: ''
  })

  // USE NAVIGATE
  const navigate = useNavigate()

  // USE MUTATION LOGIN
  const { mutate, isLoading } = useMutation({
    mutationKey: 'login',
    mutationFn: LOGIN_ADMIN,
    onSuccess: ({ data }) => {
      localStorage.setItem('token', data.token)
      navigate('/admin')
      toast('Bienvenido al panel de administración', {
        icon: '👏'
      })
    },
    onError: (error) => {
      toast(error?.response?.data?.message, {
        icon: '🚫'
      })
    }
  })

  // FUNCIONES
  const handleChange = (e) => {
    const { name, value } = e.target

    setCampos({
      ...campos,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = campos

    if (email.trim() === '') {
      return toast('El email es obligatorio', {
        icon: '🚫'
      })
    }

    if (password.trim() === '') {
      return toast('La contraseña es obligatoria', {
        icon: '🚫'
      })
    }

    mutate({
      email,
      password
    })
  }

  return (
    <div>
      <div className='loader-imagen'>
        <div
          className='fondo__banner'
          style={{
            backgroundImage: `url(/banner-5.jpg)`
          }}
        >
          <div className='container'>
            <h2>Inicia sesión como administrador</h2>
            <p>Ingresa tus credenciales para acceder al panel de administración de la tienda.</p>
          </div>
        </div>
      </div>

      <div className='container--2 padding'>
        <form className='formulario' onSubmit={handleSubmit}>
          <legend>Inicia sesión</legend>

          <div>
            <h2 className='formulario__item--top'>email</h2>
            <input
              className='formulario__input'
              type='email'
              name='email'
              value={campos.email}
              onChange={handleChange}
              placeholder='Ingresa tu email'
            />
          </div>

          <div>
            <h2 className='formulario__item--top'>password</h2>
            <input
              autoFocus
              className='formulario__input'
              type='password'
              name='password'
              value={campos.password}
              onChange={handleChange}
              placeholder='Ingresa tu contraseña'
            />
          </div>
          <div className='formulario__submit'>
            <button className='btn btn--1' type='submit' disabled={isLoading}>
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
