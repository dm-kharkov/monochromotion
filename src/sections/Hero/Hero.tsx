'use client'

import type { ReactElement } from 'react'

import React from 'react'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'

import AnimatedEntranceText from '@/components/AnimatedEntranceText'
import WaveText from '@/components/WaveText'

import { heroClasses } from '@/constants/animation'

import { heroAnimation } from './animation'

import './styles.scss'

const Hero = (): ReactElement => {
  useGSAP(() => {
    heroAnimation()
  }, [])

  return (
    <section className={clsx('h-[100vh]', heroClasses.root)}>
      <div
        className={clsx(
          'w-full h-screen fixed top-0 bg-black overflow-hidden',
          heroClasses.wrapper
        )}
      >
        <div className={clsx('w-full h-screen relative hero-bg')}>
          <div
            className={clsx(
              'size-[250vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-[50%] mix-blend-difference opacity-0 pointer-events-none',
              heroClasses.bgOverlay
            )}
          />
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-chango pointer-events-none'>
          <div className='relative'>
            <div
              className={clsx(
                'w-fit m-auto overflow-y-hidden',
                heroClasses.titleFirstWrapper
              )}
            >
              <WaveText
                text='wow'
                className={heroClasses.titleFirst}
                textClassName={clsx(
                  'opacity-0 text-[5.5rem] sm:text-[10rem] font-extrabold leading-none',
                  heroClasses.titleFirstText
                )}
              />
            </div>

            <div
              className={clsx(
                'absolute top-0 left-1/2 -translate-x-[50%] sm:left-[unset] sm:-translate-x-[0] sm:right-0 w-fit overflow-y-hidden',
                heroClasses.titleSecondWrapper
              )}
            >
              <WaveText
                text='how'
                className={clsx('translate-y-[100%]', heroClasses.titleSecond)}
                textClassName='text-[5.5rem] sm:text-[10rem] font-extrabold leading-none'
              />
            </div>

            <div className='absolute top-0 left-1/2 -translate-x-[50%] sm:left-[unset] sm:-translate-x-[0] sm:right-0 w-fit overflow-y-hidden'>
              <WaveText
                text='now'
                className={clsx('translate-y-[100%]', heroClasses.titleThird)}
                textClassName='text-[5.5rem] sm:text-[10rem] font-extrabold leading-none'
              />
            </div>

            <h1 className='h-full flex flex-col justify-center items-end font-extrabold text-white leading-none'>
              <AnimatedEntranceText
                text='it'
                component='p'
                textClassName={clsx(
                  'mr-[0] text-[5rem] sm:text-8xl black-stroke',
                  heroClasses.subtitleWord
                )}
              />

              <AnimatedEntranceText
                text='works?'
                component='p'
                textClassName={clsx(
                  'mr-[0] text-[3.6rem] sm:text-8xl uppercase black-stroke',
                  heroClasses.subtitleWord
                )}
              />
            </h1>
          </div>
        </div>
      </div>
      <div />
    </section>
  )
}

export default Hero
