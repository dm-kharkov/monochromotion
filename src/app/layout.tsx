import type { Metadata } from 'next'
import type { ReactElement } from 'react'

import React from 'react'

import { Chango, Paytone_One, Poppins } from 'next/font/google'

import clsx from 'clsx'

import { ChildrenProps } from '@/constants/interfaces'

/* local fonts
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../public/fonts/MyCustomFont.woff2',
  variable: '--font-custom',
  weight: '400',
  style: 'normal'
})
 */

import './globals.scss'

const chango = Chango({
  weight: '400',
  variable: '--font-chango',
  subsets: ['latin']
})

const paytoneOne = Paytone_One({
  weight: '400',
  variable: '--font-paytone-one',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: '400',
  variable: '--font-poppins',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Creative Motion UI',
  description: 'Craft immersive digital experiences!'
}

const RootLayout = ({ children }: ChildrenProps): ReactElement => {
  return (
    <>
      <html lang='en'>
        <body
          className={clsx(
            'body overflow-y-hidden antialiased',
            chango.variable,
            paytoneOne.variable,
            poppins.variable
          )}
        >
          {children}
        </body>
      </html>
    </>
  )
}

export default RootLayout
