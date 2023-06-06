import { useEffect } from 'react'

const Overflow = ({ children }) => {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = 'auto'
    }
  }, [])
  return children
}

export default Overflow
