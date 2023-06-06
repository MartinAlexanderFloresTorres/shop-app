import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: 'calc(100vh - 440px)'
        }}
      >
        <Outlet />
      </div>
      <Footer />
      <WhatsApp />
    </>
  )
}

export default Layout
