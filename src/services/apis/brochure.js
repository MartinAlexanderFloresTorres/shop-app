import clienteAxios from '../../config/ClienteAxios'

export const CREAR_BROCHURE = async ({ file, nombre }) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('nombre', nombre)

  const token = localStorage.getItem('token')

  return await clienteAxios.post('/brochures', formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const OBTENER_BROCHURE = async ({ id }) => {
  return await clienteAxios.get(`/brochures/${id}`)
}

export const OBTENER_BROCHURES = async () => {
  return await clienteAxios.get('/brochures')
}

export const ELIMINAR_BROCHURE = async ({ id }) => {
  const token = localStorage.getItem('token')
  return await clienteAxios.delete(`/brochures/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const ACTUALIZAR_BROCHURE = async ({ file, nombre, id }) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('nombre', nombre)

  const token = localStorage.getItem('token')

  return await clienteAxios.put(`/brochures/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
