import { useEffect, useState } from 'react'
import axios from 'axios'

const useProductos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const getProductos = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/src/data/productos.json')
      console.log(data.productos)
      setProductos(data.productos)
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
