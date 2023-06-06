import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDropzone } from 'react-dropzone'
import { BsX } from 'react-icons/bs'
import Titulo from '../Titulo'
import { CREAR_BROCHURE } from '../../services/apis/brochure'

const NewBrochure = ({ callback }) => {
  // ESTADOS
  const [nombre, setNombre] = useState('')

  // USE QUERY CLIENT
  const queryClient = useQueryClient()

  // USE MUTATION
  const { mutate, isLoading, isError } = useMutation({
    mutationKey: 'uploadBrochure',
    mutationFn: CREAR_BROCHURE,
    onSuccess: () => {
      queryClient.invalidateQueries('brochures')
      toast('Brochure subido correctamente', {
        icon: '👏'
      })
      callback()
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
      // SOLO PDF
      'application/pdf': []
    },
    maxFiles: 1
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre.trim() === '') {
      toast.error('El nombre es obligatorio')
      return
    }

    if (acceptedFiles.length === 0) {
      toast.error('No has seleccionado ningun archivo')
      return
    }

    mutate(
      {
        nombre,
        file: acceptedFiles[0]
      },
      {
        onSuccess: () => {
          acceptedFiles.splice(0, 0)
        }
      }
    )
  }

  return (
    <div className='container padding'>
      <Titulo>
        <div className='flex w-full justify-between '>
          <span>Crear Brochure</span>
          <button className='modal__close btn--circle' onClick={callback}>
            <BsX className='svg' />
          </button>
        </div>
      </Titulo>

      <div className='mt-10'>
        <form className='formulario' onSubmit={handleSubmit}>
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
              {isLoading ? 'Subiendo...' : isError ? 'Error' : 'Subir'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewBrochure
