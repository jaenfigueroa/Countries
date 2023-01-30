import {useState, useEffect} from 'react'

export const useAnchoPantalla = () => {
  const [ancho, setAncho] = useState(window.innerWidth)

  //////////////////////////////
  useEffect(() => {
    const manejarAncho = () => {
      setAncho(window.innerWidth)
    }

    window.addEventListener('resize', manejarAncho)

    return () => window.removeEventListener('resize', manejarAncho)

  }, [])

  return {
    ancho: ancho
  }
}
