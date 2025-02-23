'use client'

import type { ReactElement } from 'react'

import React from 'react'
import clsx from 'clsx'

import Contact from '@/sections/Contact'
import Creative from '@/sections/Creative'
import Hero from '@/sections/Hero'
import VideoGroup from '@/sections/VideoGroup'

import { videoClasses } from '@/constants/animation'

function HomePage(): ReactElement {
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
