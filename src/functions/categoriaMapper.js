const categoriaMapper = (categoria) => ({
  _id: categoria._id,
  nombre: categoria.nombre,
  descripcion: categoria.descripcion,
  imagen: {
    secure_url: categoria.imagen.secure_url,
    public_id: categoria.imagen.public_id
  }
})

export default categoriaMapper
