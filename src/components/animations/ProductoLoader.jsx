const ProductoLoader = () => {
  return (
    <div className='producto'>
      <div className='producto__imagen'>
        <div className='producto__link'>
          <div className='loader-imagen' style={{ width: '100%', minHeight: 260 }}></div>
        </div>
      </div>
      <div className='producto__description'>
        <div className='producto__title'>
          <div className='loader-imagen' style={{ width: '100%', minHeight: 20 }}></div>
        </div>
      </div>
    </div>
  )
}

export default ProductoLoader
