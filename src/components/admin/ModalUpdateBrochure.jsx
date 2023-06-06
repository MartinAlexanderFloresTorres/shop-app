import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDropzone } from 'react-dropzone'
import { BsX } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import { ACTUALIZAR_BROCHURE } from '../../services/apis/brochure'
import Modal from '../Modal'
import Titulo from '../Titulo'

const ModalUpdateBrochure = ({ brochure, callback }) => {
  // ESTADOS
  const [nombre, setNombre] = useState(brochure.nombre)

  // USE QUERY CLIENT
  const queryClient = useQueryClient()

  // USE MUTATION
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: ACTUALIZAR_BROCHURE,
    onSuccess: () => {
      queryClient.invalidateQueries('brochures')
      callback()
      toast('Brochure Actualizado correctamente', {
        icon: '👏'
      })
    },
    onError: ({ response }) => {
      const { data } = response

      toast(data.message, {
        icon: '🚫'
      })
    }
  })

  // USE DROPZONE
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': []
    },
    maxFiles: 1
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (nombre.trim() === '') {
      toast.error('El nombre es obligatorio')
      return
    }

    if (acceptedFiles.length === 0) {
      toast.error('No has seleccionado ningun archivo')
      return
    }

    mutate({
      id: brochure._id,
      nombre,
      file: acceptedFiles[0]
    })
  }

  return (
    <Modal>
      <div className='container padding'>
        <Titulo>
          <div className='flex w-full justify-between '>
            <span>Actualizar Brochure</span>
            <button className='modal__close btn--circle' onClick={callback}>
              <BsX className='svg' />
            </button>
          </div>
        </Titulo>

        <div className='container'>
          <form className='formulario' onSubmit={handleSubmit}>
            {acceptedFiles.length === 0 && (
              <iframe
                className='mt-10 mb-10'
                src={brochure.archivo.secure_url}
                width='100%'
                height='400px'
              />
            )}

            <input
              type='text'
              className='formulario__input'
              placeholder='Nombre del brochure'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <div className='dropzone-container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p className='dropzone__drop'>Suelta tu pdf o haz click aqui</p>
              </div>
              {acceptedFiles.length > 0 && (
                <aside className='dropzone__bottom'>
                  <ul>
                    {acceptedFiles.map((file) => (
                      <li key={file.path}>
                        <span>
                          {file.path} - {file.size} bytes
                        </span>
                        <iframe src={URL.createObjectURL(file)} width='100%' height='500px' />
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
            <div className='botones mt-10'>
              <button className='btn btn--1' disabled={isLoading}>
                {isLoading ? 'Actualizando...' : isError ? 'Error' : 'Actualizar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default ModalUpdateBrochure
