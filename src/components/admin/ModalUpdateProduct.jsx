import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-hot-toast'
import { BsX } from 'react-icons/bs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ReactQuill from 'react-quill'
import Titulo from '../../components/Titulo'
import useApp from '../../hooks/useApp'
import { ACTUALIZAR_PRODUCTO } from '../../services/apis/productos'
import Modal from '../Modal'

const DEFAULT_STATE = {
  titulo: '',
  categoria: '',
  descripcion: ''
}

const ModalUpdateProduct = ({ producto, callback }) => {
  // ESTADOS
  const [caracteristicas, setCaracteristicas] = useState(producto.caracteristicas)
  const [campos, setCampos] = useState({
    titulo: producto.titulo,
    categoria: producto.categoria,
    descripcion: producto.descripcion
  })
  const [editImage, setEditImage] = useState(false)

  // USE QUERY CLIENT
  const queryClient = useQueryClient()

  // USE APP
  const { categorias, isLoadingCategorias } = useApp()

  // USE MUTATION
  const { mutate, isLoading } = useMutation({
    mutationFn: ACTUALIZAR_PRODUCTO,
    onSuccess: () => {
      queryClient.invalidateQueries('productos')
      toast('Producto actualizado correctamente', {
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

    const { titulo, categoria, descripcion } = campos

    if (titulo.trim() === '') {
      return toast('El titulo es obligatorio', {
        icon: '🚫'
      })
    }

    if (caracteristicas.trim() === '') {
      return toast('Las caracteristicas son obligatorias', {
        icon: '🚫'
      })
    }

    if (descripcion.trim() === '') {
      return toast('La descripcion es obligatoria', {
        icon: '🚫'
      })
    }

    if (categoria.trim() === '') {
      return toast('La categoria es obligatoria', {
        icon: '🚫'
      })
    }

    if (acceptedFiles.length === 0 && editImage) {
      return toast('La imagen es obligatoria', {
        icon: '🚫'
      })
    }

    const file = acceptedFiles[0]

    mutate(
      {
        id: producto._id,
        editImage,
        titulo,
        file,
        descripcion,
        caracteristicas,
        categoria
      },
      {
        onSuccess: () => {
          // LIMPIAR ESTADOS
          setCampos(DEFAULT_STATE)

          // RESETEAR DROPZONE
          acceptedFiles.splice(0, 1)

          // LIMPIAR DESCRIPCION
          setCaracteristicas('')
        }
      }
    )
  }

  return (
    <Modal>
      <div className='container padding'>
        <Titulo>
          <div className='flex w-full justify-between '>
            <span>Editar Producto</span>
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
                  src={producto.imagen.secure_url}
                  alt={producto.titulo}
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
              <h2 className='formulario__item--top'>Titulo</h2>
              <input
                autoFocus
                className='formulario__input'
                type='text'
                name='titulo'
                value={campos.titulo}
                onChange={handleChange}
                placeholder='Ej: Pizarra blanca'
              />

              <h2 className='formulario__item--top'>Descripcion</h2>
              <textarea
                className='formulario__input formulario__input--textarea'
                name='descripcion'
                value={campos.descripcion}
                onChange={handleChange}
                placeholder='Ej: La mejor pizarra blanca del mercado'
              />
            </div>
          </div>

          <div className='formulario__grid'>
            <div>
              <h2 className='formulario__item--top'>Caracteristicas</h2>
              <ReactQuill
                theme='snow'
                value={caracteristicas}
                onChange={setCaracteristicas}
                placeholder='Ej: La mejor pizarra blanca del mercado'
              />
            </div>

            <div>
              <h2 className='formulario__item--top'>Categoria</h2>
              {categorias && categorias.length > 0 ? (
                <select
                  className='formulario__input formulario__input--select'
                  name='categoria'
                  value={campos.categoria}
                  onChange={handleChange}
                  disabled={isLoadingCategorias}
                >
                  <option value='' disabled>
                    --Seleccione--
                  </option>
                  {categorias.map((categoria) => (
                    <option key={categoria._id} value={categoria._id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
              ) : (
                <Link to='/admin/categorias/new' className='btn btn--secondary'>
                  No hay categorias, crea una nueva
                </Link>
              )}
            </div>
          </div>

          <button className='btn btn--1' type='submit' disabled={isLoading}>
            {isLoading ? 'Actualizando...' : 'Actualizar Producto'}
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default ModalUpdateProduct
