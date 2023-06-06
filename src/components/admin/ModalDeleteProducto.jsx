import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BsX } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import Modal from '../Modal'
import Producto from '../Producto'
import Titulo from '../Titulo'
import { ELIMINAR_PRODUCTO } from '../../services/apis/productos'

const ModalDeleteProducto = ({ producto, callback }) => {
  // USE CLIENT
  const queryClient = useQueryClient()

  // USE MUTATION
  const { mutate, isLoading } = useMutation({
    mutationKey: 'deleteProducto',
    mutationFn: ELIMINAR_PRODUCTO,
    onSuccess: () => {
      queryClient.invalidateQueries('productos')
      toast.success('Producto eliminado')
      callback()
    }
  })

  const handleDeleteProducto = () => {
    mutate({ id: producto._id })
  }

  return (
    <Modal>
      <div className='container padding modal__center'>
        <div className='modal__confirmacion'>
          <Titulo>
            <div className='flex w-full justify-between'>
              <span>Eliminar Producto</span>
              <button className='modal__close btn--circle' onClick={callback} disabled={isLoading}>
                <BsX className='svg' />
              </button>
            </div>
          </Titulo>
          <div className='mt-10'>
            <Producto producto={producto} />
            <p className='mt-20 mb-20'>
              Si eliminas este producto no podras recuperarlo,
              <b> ¿Estas seguro que deseas eliminarlo?</b>
            </p>

            <div className='modal__container__buttons'>
              <button
                className='btn btn--danger'
                onClick={handleDeleteProducto}
                disabled={isLoading}
              >
                {isLoading ? 'Eliminando...' : 'Eliminar'}
              </button>
              <button className='btn btn--secondary' onClick={callback} disabled={isLoading}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDeleteProducto
