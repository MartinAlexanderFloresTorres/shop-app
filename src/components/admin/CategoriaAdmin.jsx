import { useState } from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import ModalUpdateCategoria from './ModalUpdateCategoria'
import ModalDeleteCategoria from './ModalDeleteCategoria'

const CategoriaAdmin = ({ categoria }) => {
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

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setShowModalEdit(true)}>Editar</SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => setShowModalDelete(true)}>Eliminar</SwipeAction>
    </TrailingActions>
  )

  return (
    <>
      <SwipeableList>
        <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
          <button className='categoria flex justify-between'>{categoria.nombre}</button>
        </SwipeableListItem>
      </SwipeableList>

      {showModalEdit && (
        <ModalUpdateCategoria categoria={categoria} callback={handleShowModalEdit} />
      )}

      {showModalDelete && (
        <ModalDeleteCategoria categoria={categoria} callback={handleShowModalDelete} />
      )}
    </>
  )
}

export default CategoriaAdmin
