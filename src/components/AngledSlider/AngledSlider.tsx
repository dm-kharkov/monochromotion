import type { ReactElement } from 'react'

import clsx from 'clsx'

import './styles.scss'

const AngledSlider = ({
  className,
  slides
}: {
  className?: string
  slides: string[]
}): ReactElement => {
  return (
    <ul role='tablist' className={clsx('slider', className)}>
      {slides.map((slide, index) => (
        <li key={index} role='tab' tabIndex={0}>
          <div className='background' inert>
            {/* prettier-ignore */}
            <video
              muted
              autoPlay
              loop
              src={slide}
            />
          </div>

          <div className='decor' />
        </li>
      ))}
    </ul>
  )
}

export default AngledSlider
