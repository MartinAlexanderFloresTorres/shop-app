import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BsX } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import Modal from '../Modal'
import Categoria from '../Categoria'
import Titulo from '../Titulo'
import { ELIMINAR_CATEGORIA } from '../../services/apis/categorias'

const ModalDeleteCategoria = ({ categoria, callback }) => {
  // USE CLIENT
  const queryClient = useQueryClient()

  // USE MUTATION
  const { mutate, isLoading } = useMutation({
    mutationKey: 'deleteProducto',
    mutationFn: ELIMINAR_CATEGORIA,
    onSuccess: () => {
      queryClient.invalidateQueries('categorias')
      queryClient.invalidateQueries('productos')
      toast.success('Categoria eliminada')
      callback()
    },
    onError: ({ response }) => {
      const { data } = response
      toast.error(data.message)
    }
  })

  const handleDeleteProducto = () => {
    mutate({ id: categoria._id })
  }

  return (
    <Modal>
      <div className='container padding modal__center'>
        <div className='modal__confirmacion'>
          <Titulo>
            <div className='flex w-full justify-between'>
              <span>Eliminar Categoria</span>
              <button className='modal__close btn--circle' onClick={callback} disabled={isLoading}>
                <BsX className='svg' />
              </button>
            </div>
          </Titulo>
          <div className='mt-10'>
            <Categoria categoria={categoria} />
            <p className='mt-20 mb-20'>
              Si eliminas esta categoria no podras recuperarlo asi mismo se eliminara de todos los
              productos de esta categoria.
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

export default ModalDeleteCategoria
