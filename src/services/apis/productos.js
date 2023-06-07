import clienteAxios from '../../config/ClienteAxios'

export const CREAR_PRODUCTO = async ({ titulo, file, descripcion, caracteristicas, categoria }) => {
  const formData = new FormData()

  formData.append('titulo', titulo)
  formData.append('file', file)
  formData.append('descripcion', descripcion)
  formData.append('caracteristicas', caracteristicas)
  formData.append('categoria', categoria)

  const token = localStorage.getItem('token')

  return await clienteAxios.post('/productos', formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const OBTENER_PRODUCTOS = async () => {
  return await clienteAxios.get('/productos')
}

export const OBTENER_PRODUCTO_BY_ID = async ({ id }) => {
  return await clienteAxios.get(`/productos/${id}`)
}

export const ACTUALIZAR_PRODUCTO = async ({
  id,
  titulo,
  file,
  descripcion,
  caracteristicas,
  categoria,
  editImage
}) => {
  const formData = new FormData()

  formData.append('titulo', titulo)
  formData.append('file', file)
  formData.append('descripcion', descripcion)
  formData.append('caracteristicas', caracteristicas)
  formData.append('categoria', categoria)
  formData.append('editImage', editImage)

  const token = localStorage.getItem('token')

  return await clienteAxios.put(`/productos/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const ELIMINAR_PRODUCTO = async ({ id }) => {
  const token = localStorage.getItem('token')
  return await clienteAxios.delete(`/productos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const BUSCAR_PRODUCTOS = async ({ query }) => {
  return await clienteAxios.get(`/productos/search/querys?query=${query}`)
}

export const PRODUCTOS_RELACIONADOS = async ({ categoriaId, productoId }) => {
  return await clienteAxios.get(
    `/productos/productos/relacionados?categoriaId=${categoriaId}&productoId=${productoId}&limit=12`
  )
}
