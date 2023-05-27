import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Search from './pages/Search'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />

          <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
