import { scrollToTop } from '@/utils'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop('auto')
  }, [pathname])
  return null
}

export default ScrollToTop
