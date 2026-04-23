'use client'

import Navigation from './Navigation'
import Footer from './Footer'
import PageLoader from '../ui/PageLoader'
import { usePageLoader } from '../../hooks/usePageLoader'

interface LayoutProps {
  children: React.ReactNode
  loaderTitle?: string
  loaderSubtitle?: string
  loaderDuration?: number
}

export default function Layout({ 
  children, 
  loaderTitle,
  loaderSubtitle,
  loaderDuration = 1400 
}: LayoutProps) {
  const { isLoading } = usePageLoader({ duration: loaderDuration })

  return (
    <>
      <PageLoader 
        isLoading={isLoading}
        title={loaderTitle}
        subtitle={loaderSubtitle}
        duration={loaderDuration}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
