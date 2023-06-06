import { useState } from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import ModalUpdateProduct from './ModalUpdateProduct'
import ModalDeleteProducto from './ModalDeleteProducto'

const ProductoAdmin = ({ producto }) => {
  // ESTADOS
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const { titulo, imagen } = producto

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
          <article className='producto'>
            <div className='producto__imagen'>
              <div className='producto__link' title={titulo}>
                <img
                  src={imagen.secure_url}
                  alt={titulo}
                  title={titulo}
                  width='185px'
                  height='260px'
                />
              </div>
            </div>
            <div className='producto__description'>
              <div className='producto__title'>
                <a title={titulo}>{titulo}</a>
              </div>
            </div>
          </article>
        </SwipeableListItem>
      </SwipeableList>

      {showModalEdit && <ModalUpdateProduct producto={producto} callback={handleShowModalEdit} />}
      {showModalDelete && (
        <ModalDeleteProducto producto={producto} callback={handleShowModalDelete} />
      )}
    </>
  )
}

export default ProductoAdmin
