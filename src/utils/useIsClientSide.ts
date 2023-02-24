import { useEffect, useState } from 'react'

export const useIsClientSide = (): boolean => {
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  return isClientSide
}
