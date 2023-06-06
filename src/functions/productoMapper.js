const productoMapper = (producto) => ({
  _id: producto._id,
  titulo: producto.titulo,
  descripcion: producto.descripcion,
  caracteristicas: producto.caracteristicas,
  categoria: producto.categoria,
  imagen: {
    secure_url: producto.imagen.secure_url,
    public_id: producto.imagen.public_id
  }
})

export default productoMapper
