import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState<'entering' | 'entered'>('entered')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('entering')
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('entered')
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location, displayLocation])

  return (
    <div className={`page-transition page-transition-${transitionStage}`}>
      {children}
    </div>
  )
}

