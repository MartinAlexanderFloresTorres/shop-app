import { useState } from 'react'
import { BsTrash, BsPencil } from 'react-icons/bs'
import ModalUpdateBrochure from './ModalUpdateBrochure'
import ModalDeleteBrochure from './ModalDeleteBrochure'

const BrochureAdmin = ({ brochure }) => {
  // ESTADOS
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  // FUNCIONES
  const handleShowModalEdit = () => {
    setShowModalEdit(!showModalEdit)
  }

  const handleShowModalDelete = () => {
    setShowModalDelete(!showModalDelete)
  }

  return (
    <div key={brochure._id} className='brochure flex w-full justify-between mt-10'>
      <h2 className='brochure__titulo'>{brochure.nombre}</h2>

      <div className='botones'>
        <button className='btn--circle' onClick={handleShowModalEdit}>
          <BsPencil />
        </button>
        <button className='btn--circle' onClick={handleShowModalDelete}>
          <BsTrash />
        </button>
      </div>

      {showModalEdit && <ModalUpdateBrochure brochure={brochure} callback={handleShowModalEdit} />}

      {showModalDelete && (
        <ModalDeleteBrochure brochure={brochure} callback={handleShowModalDelete} />
      )}
    </div>
  )
}

export default BrochureAdmin
