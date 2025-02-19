import type { ReactElement } from 'react'

import WaveText from '@/components/WaveText'

const Safari = (): ReactElement => {
  return (
    <section className='w-screen h-dvh flex flex-col items-center justify-center bg-black font-chango'>
      <WaveText
        text='Unfortunately'
        textClassName='text-[4rem] font-extrabold leading-none'
      />

      <p className='mt-[2rem] text-[2rem] text-white'>
        Safari not support <span style={{ color: 'red' }}>mix-blend-mode</span>{' '}
        :(
      </p>

      <p className='mt-[2rem] text-[2rem] text-white'>
        use <span style={{ color: 'orange' }}>Chrome</span> instead :)
      </p>
    </section>
  )
}

export default Safari
