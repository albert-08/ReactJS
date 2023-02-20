import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  const getNewFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  // para recuperar la cita al cargar la página
  useEffect(getNewFact, [])

  return { fact, getNewFact }
}
