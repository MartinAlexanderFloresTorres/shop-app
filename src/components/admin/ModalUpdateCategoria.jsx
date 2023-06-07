import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-hot-toast'
import { ACTUALIZAR_CATEGORIA } from '../../services/apis/categorias'

import Modal from '../Modal'
import Titulo from '../Titulo'
import { BsX } from 'react-icons/bs'
const DEFAULT_STATE = {
  nombre: '',
  descripcion: ''
}
const ModalUpdateCategoria = ({ categoria, callback }) => {
  // ESTADOS
  const [campos, setCampos] = useState({
    nombre: categoria.nombre,
    descripcion: categoria.descripcion
  })
  const [editImage, setEditImage] = useState(false)

  // USE QUERY CLIENT
  const queryClient = useQueryClient()

  // USE MUTATION
  const { mutate, isLoading } = useMutation({
    mutationFn: ACTUALIZAR_CATEGORIA,
    onSuccess: () => {
      queryClient.invalidateQueries('categorias')
      callback()
      toast('Categoria actualizada correctamente', {
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
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
      'image/webp': []
    },
    maxFiles: 1
  })

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      <span>
        {file.path} - {file.size} bytes
      </span>
      <img src={URL.createObjectURL(file)} alt='categoria imagen' />
    </li>
  ))

  // FUNCIONES
  const handleChange = (e) => {
    const { name, value } = e.target

    setCampos({
      ...campos,
      [name]: value
    })
  }

  const handleEditImage = () => {
    setEditImage(!editImage)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { nombre, descripcion } = campos

    if (nombre.trim() === '') {
      return toast('El nombre es obligatorio', {
        icon: '🚫'
      })
    }

    if (descripcion.trim() === '') {
      return toast('La descripcion es obligatoria', {
        icon: '🚫'
      })
    }

    if (acceptedFiles.length === 0 && editImage) {
      return toast('La imagen es obligatoria', {
        icon: '🚫'
      })
    }

    // OBTENER IMAGEN
    const file = acceptedFiles[0]

    // CREAR CATEGORIA
    mutate(
      { id: categoria._id, nombre, descripcion, file },
      {
        onSuccess: () => {
          // RESETEAR FORMULARIO
          setCampos(DEFAULT_STATE)

          // RESETEAR DROPZONE
          acceptedFiles.splice(0, 1)
        }
      }
    )
  }

  return (
    <Modal>
      <div className='container padding'>
        <Titulo>
          <div className='flex w-full justify-between '>
            <span>Editar Categoria</span>
            <button className='modal__close btn--circle' onClick={callback}>
              <BsX className='svg' />
            </button>
          </div>
        </Titulo>

        <form className='formulario' onSubmit={handleSubmit}>
          <div className='formulario__grid'>
            {editImage ? (
              <div className='dropzone-container'>
                <div
                  {...getRootProps({
                    className: 'dropzone'
                  })}
                >
                  <input {...getInputProps({})} />
                  <p className='dropzone__drop'>Suelta tu imagen o haz click aqui</p>
                </div>
                {files.length > 0 && (
                  <aside className='dropzone__bottom'>
                    <ul>{files}</ul>
                  </aside>
                )}

                <button
                  className='formulario__btn-editar-imagen'
                  type='button'
                  onClick={handleEditImage}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div className='dropzone-container formulario__imagen'>
                <img
                  className='formulario__imagen'
                  src={categoria.imagen.secure_url}
                  alt={categoria.titulo}
                />
                <button
                  className='formulario__btn-editar-imagen'
                  type='button'
                  onClick={handleEditImage}
                >
                  Editar Imagen
                </button>
              </div>
            )}

            <div>
              <h2 className='formulario__item--top'>Nombre</h2>
              <input
                className='formulario__input'
                type='text'
                name='nombre'
                value={campos.nombre}
                onChange={handleChange}
                placeholder='Ej: Pizarras'
              />

              <h2 className='formulario__item--top'>Descripcion</h2>
              <textarea
                className='formulario__input formulario__input--textarea'
                name='descripcion'
                value={campos.descripcion}
                onChange={handleChange}
                cols='1'
                rows='1'
                placeholder='Ej: Pizarras de todos los tamaños y colores'
              />

              <button className='btn btn--1' disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Editar Categoria'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default ModalUpdateCategoria
