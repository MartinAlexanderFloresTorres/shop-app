import { useLocation } from 'react-router-dom'
import { createContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { OBTENER_CATEGORIAS, OBTENER_CATEGORIAS_PRODUCTOS } from '../services/apis/categorias'
import { OBTENER_PRODUCTOS } from '../services/apis/productos'
import { OBTENER_BROCHURES } from '../services/apis/brochure'
import useObtenerFavoritos from '../hooks/useObtenerFavoritos'

export const AppContext = createContext({
  categorias: [],
  isLoadingCategorias: false,
  categoriasProductos: [],
  isLoadingCategoriasProductos: false,
  productos: [],
  isLoadingProductos: false,
  brochures: [],
  isLoadingBrochures: false,
  favoritos: [],
  loadingFavoritos: false,
  addFavoritos: () => {},
  removeFavoritos: () => {}
})

const AppProvider = ({ children }) => {
  const { pathname } = useLocation()

  // OBTENER CATEGORIAS
  const { data: categorias, isLoading: isLoadingCategorias } = useQuery({
    queryKey: ['categorias'],
    queryFn: OBTENER_CATEGORIAS,
    select: ({ data }) => data
  })

  // OBTENER PRODUCTOS
  const { data: productos, isLoading: isLoadingProductos } = useQuery({
    queryKey: ['productos'],
    queryFn: OBTENER_PRODUCTOS,
    select: ({ data }) => data
  })

  // USE QUERY
  const { data: brochures, isLoading: isLoadingBrochures } = useQuery({
    queryKey: ['brochures'],
    queryFn: OBTENER_BROCHURES,
    select: ({ data }) => data
  })

  // USE QUERY CATEGORIAS PRODUCTOS
  const { data: categoriasProductos, isLoading: isLoadingCategoriasProductos } = useQuery({
    queryKey: ['categoriasProductos'],
    queryFn: OBTENER_CATEGORIAS_PRODUCTOS,
    select: ({ data }) => data
  })

  // USE OBTENER FAVORITOS
  const {
    favoritos,
    loading: loadingFavoritos,
    addFavoritos,
    removeFavoritos
  } = useObtenerFavoritos()

  // SCROLL TO TOP EN CADA CAMBIO DE RUTA
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AppContext.Provider
      value={{
        categorias,
        isLoadingCategorias,
        categoriasProductos,
        isLoadingCategoriasProductos,
        productos,
        isLoadingProductos,
        brochures,
        isLoadingBrochures,
        favoritos,
        loadingFavoritos,
        addFavoritos,
        removeFavoritos
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
