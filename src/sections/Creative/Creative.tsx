'use client'

import type { ReactElement } from 'react'

import React from 'react'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'

import AnimatedEntrance from '@/components/AnimatedEntrance'
import Marquee from '@/components/Marquee'

import { creativeClasses } from '@/constants/animation'
import { marqueeCollection, creativeCollection } from '@/constants/data'

import { creativeAnimation } from './animation'

import './styles.scss'

const Creative = (): ReactElement => {
  useGSAP(() => {
    creativeAnimation()
  }, [])

  return (
    <section
      className={clsx(
        'min-h-screen relative flex flex-col overflow-x-hidden mt-[100vh] pointer-events-none z-10',
        creativeClasses.root
      )}
    >
      <article className='font-chango text-7xl mix-blend-hard-light'>
        <Marquee className='p-[1rem]' text={marqueeCollection} speed={80} />
      </article>

      <div
        className={clsx(
          'absolute top-0 left-0 h-full size-1/2 bg-black mix-blend-exclusion',
          creativeClasses.leftPanel
        )}
      />

      <div
        className={clsx(
          'absolute top-0 right-0 h-full size-1/2 bg-white mix-blend-exclusion',
          creativeClasses.rightPanel
        )}
      />

      <div className='w-[min(100%,1400px)] mx-[auto] flex flex-col grow justify-center mix-blend-difference font-paytone-one'>
        <div className='-mb-[min(5vw,50px)]  px-[10px] sm:px-[2rem]'>
          <AnimatedEntrance className='w-1/2' variant='appearance' hideOnLeave>
            <p
              className={clsx(
                'w-fit text-3xl md:text-5xl leading-[1.2] mix-blend-difference',
                creativeClasses.leftText
              )}
            >
              Craft your
            </p>
          </AnimatedEntrance>
        </div>

        <AnimatedEntrance
          className='font-paytone-one text-[15rem] sm:text-[25rem] lg:text-[30rem] leading-[0.9]'
          delay={500}
          transform={false}
        >
          <div className='flex mix-blend-difference'>
            <span
              className={clsx(
                'w-1/2 text-right pr-[0.8rem]',
                creativeClasses.leftTitle
              )}
            >
              U
            </span>

            <span className={clsx('w-1/2', creativeClasses.rightTitle)}>I</span>
          </div>
        </AnimatedEntrance>

        <div className='relative flex px-[10px] sm:px-[2rem] pb-[10px] sm:pb-[2rem]'>
          <div className='w-1/2' />

          <div className='w-1/2 text-right creative-list'>
            {creativeCollection.map((word, index) => {
              const isFirst = index === 0

              return (
                <AnimatedEntrance
                  key={index}
                  delay={index * 50}
                  variant='appearance'
                  hideOnLeave
                >
                  <p
                    className={clsx(
                      `w-fit ml-[auto] text-3xl md:text-5xl ${creativeClasses.rightText}`,
                      !isFirst && 'mix-blend-difference',
                      isFirst && 'bg-white text-black px-[5px]'
                    )}
                  >
                    {word}
                  </p>
                </AnimatedEntrance>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Creative
