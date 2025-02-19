'use client'

import type { ReactElement } from 'react'

import React from 'react'
import clsx from 'clsx'

import Safari from '@/components/Safari'

import Contact from '@/sections/Contact'
import Creative from '@/sections/Creative'
import Hero from '@/sections/Hero'
import VideoGroup from '@/sections/VideoGroup'

import { videoClasses } from '@/constants/animation'

function HomePage(): ReactElement {
  const [isSafari, setIsSafari] = React.useState<boolean>(false)

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isSafari =
      userAgent.includes('safari') && !userAgent.includes('chrome')

    setIsSafari(isSafari)
  }, [])

  if (isSafari) {
    return <Safari />
  }

  return (
    <section className='w-screen'>
      <Hero />

      <div className='relative'>
        <Creative />

        <VideoGroup
          className={clsx(
            'h-auto absolute bottom-0 left-0 grayscale z-0',
            videoClasses.root
          )}
        />
      </div>

      <Contact />
    </section>
  )
}

export default HomePage
