import { BsPencil, BsTrash } from 'react-icons/bs'

const BrochureLoader = () => {
  return (
    <div className='brochure flex w-full justify-between mt-10'>
      <div className='loader-imagen' style={{ flex: 'auto', minHeight: 20 }}></div>

      <div className='botones'>
        <button className='btn--circle'>
          <BsPencil />
        </button>
        <button className='btn--circle'>
          <BsTrash />
        </button>
      </div>
    </div>
  )
}

export default BrochureLoader
