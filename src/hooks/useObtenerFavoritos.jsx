import { useEffect, useState } from 'react'

const useObtenerFavoritos = () => {
  const [favoritos, setFavoritos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const obtenerFavoritos = async () => {
      setLoading(true)
      const favoritosLocalStorage = localStorage.getItem('favoritos')
      if (favoritosLocalStorage) {
        setFavoritos(JSON.parse(favoritosLocalStorage))
      }
      setLoading(false)
    }
    obtenerFavoritos()
  }, [])

  const addFavoritos = ({ producto }) => {
    const existe = favoritos.some((item) => item._id === producto._id)

    if (existe) {
      removeFavoritos({ producto })
      return
    }

    // Actualizar estado
    setFavoritos((prevState) => {
      // Actualizar localStorage
      localStorage.setItem('favoritos', JSON.stringify([...prevState, producto]))

      return [...prevState, producto]
    })
  }

  const removeFavoritos = ({ producto }) => {
    // Actualizar estado
    setFavoritos((prevState) => {
      // Eliminar producto
      const nuevosFavoritos = prevState.filter((item) => item._id !== producto._id)
      // Actualizar localStorage
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))

      return nuevosFavoritos
    })
  }
  return { favoritos, loading, addFavoritos, removeFavoritos }
}

export default useObtenerFavoritos
