import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Search from './pages/Search'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Products from './pages/Products'
import AppProvider from './providers/AppProvider'
import AdminLayout from './layouts/AdminLayout'
import AdminProducts from './pages/admin/AdminProducts.JSX'
import NewProduct from './pages/admin/NewProduct'
import NewCategoria from './pages/admin/NewCategoria'
import Brochure from './pages/admin/Brochure'
import AdminCategorias from './pages/admin/AdminCategorias'
import Categorias from './pages/Categorias'
import Categoria from './pages/Categoria'
import Favoritos from './pages/Favoritos'
import NotFound from './pages/NotFound'
import AdminLogin from './pages/admin/AdminLogin'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/about' element={<About />} />
                <Route path='/products/:id' element={<Product />} />
                <Route path='/categorias' element={<Categorias />} />
                <Route path='/categorias/:id' element={<Categoria />} />
              </Route>

              <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<Navigate to={'/admin/products'} />} />
                <Route path='products' element={<AdminProducts />} />
                <Route path='products/new' element={<NewProduct />} />
                <Route path='categorias' element={<AdminCategorias />} />
                <Route path='categorias/new' element={<NewCategoria />} />
                <Route path='Brochure' element={<Brochure />} />
              </Route>

              <Route path='admin/login' element={<AdminLogin />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </QueryClientProvider>

      <Toaster
        position='bottom-right'
        toastOptions={{
          duration: 3000
        }}
      />
    </>
  )
}

export default App
