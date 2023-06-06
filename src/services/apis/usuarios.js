import clienteAxios from '../../config/ClienteAxios'

export const LOGIN_ADMIN = async ({ email, password }) => {
  return await clienteAxios.post('/usuarios/login/admin', {
    email,
    password
  })
}

export const COMPROBAR_ADMIN = async ({ token }) => {
  return await clienteAxios.get('/usuarios/comprobar/admin', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
