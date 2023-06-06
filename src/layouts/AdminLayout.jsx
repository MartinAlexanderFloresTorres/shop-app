import { Navigate, Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import AdminHeader from '../components/admin/AdminHeader'
import { COMPROBAR_ADMIN } from '../services/apis/usuarios'
import 'react-quill/dist/quill.snow.css'
import 'react-swipeable-list/dist/styles.css'

const AdminLayout = () => {
  // USE QUERY
  const { isLoading, isError } = useQuery({
    queryKey: ['comprobarAdmin'],
    queryFn: () => COMPROBAR_ADMIN({ token: localStorage.getItem('token') }),
    select: ({ data }) => data,
    retry: 0,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
    }
  })

  if (isLoading) return null

  if (isError) {
    return <Navigate to='/admin/login' />
  }

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}

export default AdminLayout
