const BannerLoader = () => {
  return (
    <div className='loader-imagen'>
      <div className='fondo__banner'>
        <div className='container'>
          <div
            className='loader-imagen mb-20'
            style={{
              width: '30%',
              minHeight: '50px'
            }}
          ></div>

          <div
            className='loader-imagen mb-20'
            style={{
              width: '60%',
              minHeight: '80px'
            }}
          ></div>

          <div
            className='btn btn--white btn--max300'
            style={{
              pointerEvents: 'none'
            }}
          >
            <div className='loader-imagen' style={{ width: '100%', minHeight: 20 }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerLoader
