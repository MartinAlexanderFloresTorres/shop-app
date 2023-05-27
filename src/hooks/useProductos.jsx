import { useEffect, useState } from 'react'
import productosjson from '../data/productos.json'

const useProductos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const getProductos = async () => {
    setLoading(true)
    try {
      setProductos(productosjson.productos)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getProductos()
  }, [])

  return { productos, loading }
}

export default useProductos
