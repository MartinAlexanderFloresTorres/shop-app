import clienteAxios from '../../config/ClienteAxios'

export const CREAR_CATEGORIA = async ({ nombre, file, descripcion }) => {
  const formData = new FormData()

  formData.append('nombre', nombre)
  formData.append('file', file)
  formData.append('descripcion', descripcion)

  const token = localStorage.getItem('token')

  return await clienteAxios.post('/categorias', formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const OBTENER_CATEGORIAS = async () => {
  return await clienteAxios.get('/categorias')
}

export const OBTENER_CATEGORIA_BY_ID = async ({ id }) => {
  return await clienteAxios.get(`/categorias/productos/${id}`)
}

export const ACTUALIZAR_CATEGORIA = async ({ id, nombre, file, descripcion }) => {
  const formData = new FormData()

  formData.append('nombre', nombre)
  formData.append('file', file)
  formData.append('descripcion', descripcion)

  const token = localStorage.getItem('token')

  return await clienteAxios.put(`/categorias/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const ELIMINAR_CATEGORIA = async ({ id }) => {
  const token = localStorage.getItem('token')
  return await clienteAxios.delete(`/categorias/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const OBTENER_CATEGORIAS_PRODUCTOS = async () => {
  return await clienteAxios.get('/categorias/productos/categorias/find')
}
