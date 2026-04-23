'use client'

import { useState, useEffect } from 'react'

interface UsePageLoaderOptions {
  duration?: number
  autoHide?: boolean
}

export function usePageLoader(options: UsePageLoaderOptions = {}) {
  const { duration = 1400, autoHide = true } = options
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, autoHide])

  const showLoader = () => setIsLoading(true)
  const hideLoader = () => setIsLoading(false)

  return {
    isLoading,
    showLoader,
    hideLoader
  }
}
