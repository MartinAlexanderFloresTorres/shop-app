import Overflow from './Overflow'

const Modal = ({ children }) => {
  return (
    <Overflow>
      <div className='modal'>
        <div className='modal__container'>{children}</div>
      </div>
    </Overflow>
  )
}

export default Modal
