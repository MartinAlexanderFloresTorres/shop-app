import useApp from '../hooks/useApp'
import Brochure from './Brochure'

const Brochures = () => {
  const { brochures, isLoadingBrochures } = useApp()
  if (isLoadingBrochures) return null

  if (brochures.length === 0) return null

  return (
    <div className='brochures'>
      <h2 className='mb-10'>Brochures</h2>
      <div className='brochures__container'>
        {brochures.map((brochure) => (
          <Brochure key={brochure._id} brochure={brochure} />
        ))}
      </div>
    </div>
  )
}

export default Brochures
