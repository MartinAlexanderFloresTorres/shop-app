import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BsX } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import Modal from '../Modal'
import Titulo from '../Titulo'
import { ELIMINAR_BROCHURE } from '../../services/apis/brochure'

const ModalDeleteBrochure = ({ brochure, callback }) => {
  // USE CLIENT
  const queryClient = useQueryClient()

  // USE MUTATION
  const { mutate, isLoading } = useMutation({
    mutationKey: 'deleteBrochure',
    mutationFn: ELIMINAR_BROCHURE,
    onSuccess: () => {
      queryClient.invalidateQueries('brochures')
      toast('Brochure eliminado correctamente', {
        icon: '👏'
      })
      callback()
    },
    onError: ({ response }) => {
      const { data } = response
      toast.error(data.message)
    }
  })

  const handleDeleteBrochure = () => {
    mutate({ id: brochure._id })
  }

  return (
    <Modal>
      <div className='container padding modal__center'>
        <div className='modal__confirmacion'>
          <Titulo>
            <div className='flex w-full justify-between'>
              <span>Eliminar Brochure</span>
              <button className='modal__close btn--circle' onClick={callback}>
                <BsX className='svg' />
              </button>
            </div>
          </Titulo>

          <div className='mt-10'>
            <p className='mt-20 mb-20'>
              Se eliminará el brochure <b> ¿Estas seguro que deseas eliminarlo?</b>
            </p>

            <div className='modal__container__buttons'>
              <button
                className='btn btn--danger'
                onClick={handleDeleteBrochure}
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

export default ModalDeleteBrochure
