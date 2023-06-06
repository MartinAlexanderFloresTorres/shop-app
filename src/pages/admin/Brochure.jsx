import { useState } from 'react'
import useApp from '../../hooks/useApp'
import Titulo from '../../components/Titulo'
import BrochureAdmin from '../../components/admin/BrochureAdmin'
import Modal from '../../components/Modal'
import NewBrochure from '../../components/admin/NewBrochure'
import Overflow from '../../components/Overflow'
import BrochuresLoaders from '../../components/animations/BrochuresLoaders'

const Brochure = () => {
  // ESTADOS
  const [isShowModal, setIsShowModal] = useState(false)

  // USE APP
  const { brochures, isLoadingBrochures } = useApp()

  // FUNCUIONES
  const handleShowModal = () => {
    setIsShowModal(!isShowModal)
  }

  return (
    <div className='container padding'>
      <Titulo>
        <div className='flex w-full justify-between '>
          <span>Brochure</span>
          <button className='btn btn--1' onClick={handleShowModal}>
            New Brochure
          </button>
        </div>
      </Titulo>
      <div className='brochures__container'>
        {isLoadingBrochures ? (
          <BrochuresLoaders />
        ) : brochures.length > 0 ? (
          brochures.map((brochure) => <BrochureAdmin key={brochure._id} brochure={brochure} />)
        ) : (
          <p className='mensage'>No hay brochures</p>
        )}
      </div>

      {isShowModal && (
        <Overflow>
          <Modal>
            <NewBrochure callback={handleShowModal} />
          </Modal>
        </Overflow>
      )}
    </div>
  )
}

export default Brochure
