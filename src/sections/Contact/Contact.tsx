'use client'

import type { ReactElement } from 'react'

import clsx from 'clsx'

import { useGSAP } from '@gsap/react'

import {
  contactItemsCollection,
  contactTitleCollection
} from '@/constants/data'

import { contactClasses } from '@/constants/animation'

import ContactGroup from './ContactGroup'

import { contactAnimation } from './animation'

import './styles.scss'

const Contact = (): ReactElement => {
  useGSAP(() => {
    contactAnimation()
  }, [])

  return (
    <section className='h-[350px] relative z-12 mt-[50vh] bg-white p-[1rem]'>
      <div className='h-full w-[min(100%,1400px)] mx-[auto] flex flex-col sm:flex-row justify-end'>
        {contactItemsCollection.map((collection, index) => {
          const isRight = index === 1

          return (
            <div
              key={index}
              className={clsx(
                'w-full sm:w-1/2 flex flex-col justify-end',
                isRight && 'mt-[1rem] sm:mt-0'
              )}
            >
              <ContactGroup
                collection={collection}
                className={clsx(isRight && 'sm:text-end sm:items-end')}
              />
            </div>
          )
        })}
      </div>

      <div
        className={clsx(
          'w-full sm:w-[auto] px-[1rem] absolute -top-[20%] md:-top-[50%] left-[50%] -translate-x-[50%] flex flex-col text-[5rem] md:text-[11.5rem] -tracking-[0.5rem] md:-tracking-[1.5rem] leading-[0.64] text-center text-white font-source-sans cursor-pointer mix-blend-difference',
          contactClasses.textWrapper
        )}
        data-splitting
      >
        {contactTitleCollection.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </div>
    </section>
  )
}

export default Contact
