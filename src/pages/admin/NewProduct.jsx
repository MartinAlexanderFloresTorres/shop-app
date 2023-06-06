import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ReactQuill from 'react-quill'
import Titulo from '../../components/Titulo'
import useApp from '../../hooks/useApp'
import { CREAR_PRODUCTO } from '../../services/apis/productos'
import { Link } from 'react-router-dom'

const DEFAULT_STATE = {
  titulo: '',
  categoria: '',
  descripcion: ''
}

const NewProduct = () => {
  // ESTADOS
  const [caracteristicas, setCaracteristicas] = useState('')
  const [campos, setCampos] = useState(DEFAULT_STATE)

  // USE QUERY CLIENT
  const queryClient = useQueryClient()

  // USE APP
  const { categorias, isLoadingCategorias } = useApp()

  // USE MUTATION
  const { mutate, isLoading } = useMutation({
    mutationFn: CREAR_PRODUCTO,
    onSuccess: () => {
      queryClient.invalidateQueries('productos')
      toast('Producto creado correctamente', {
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
      'image/png': []
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

    if (acceptedFiles.length === 0) {
      return toast('La imagen es obligatoria', {
        icon: '🚫'
      })
    }

    const file = acceptedFiles[0]

    mutate(
      {
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
    <div className='container padding'>
      <Titulo>Nuevo Producto</Titulo>
      <form className='formulario' onSubmit={handleSubmit}>
        <div className='dropzone-container mb-20'>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p className='dropzone__drop'>Suelta tu imagen o haz click aqui</p>
          </div>
          {files.length > 0 && (
            <aside className='dropzone__bottom'>
              <ul>{files}</ul>
            </aside>
          )}
        </div>

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
        </div>

        <div>
          <h2 className='formulario__item--top'>Descripcion</h2>
          <textarea
            className='formulario__input formulario__input--textarea'
            name='descripcion'
            value={campos.descripcion}
            onChange={handleChange}
            placeholder='Ej: La mejor pizarra blanca del mercado'
          />
        </div>

        <div className='mb-20'>
          <h2 className='formulario__item--top'>Caracteristicas</h2>
          <ReactQuill
            theme='snow'
            value={caracteristicas}
            onChange={setCaracteristicas}
            placeholder='Ej: La mejor pizarra blanca del mercado'
          />
        </div>

        <div className='mb-10'>
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

        <button className='btn btn--1' type='submit' disabled={isLoading}>
          {isLoading ? 'Creando...' : 'Crear Producto'}
        </button>
      </form>
    </div>
  )
}

export default NewProduct
