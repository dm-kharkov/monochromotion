import type { ElementType, ReactElement } from 'react'

import clsx from 'clsx'

import { BaseTextProps } from '@/constants/interfaces'

import './styles.scss'

const WaveText = ({
  className,
  component: Component = 'span',
  text,
  textClassName,
  wrapper: Wrapper = 'div',
  colorType = 'white'
}: BaseTextProps & {
  className?: string
  wrapper?: ElementType
  colorType?: 'white' | 'black'
}): ReactElement => {
  return (
    <Wrapper className={clsx('relative', className)}>
      {Array.from({ length: 2 }).map((_, i) => {
        const isFirst = i === 0
        const isWhiteType = colorType === 'white'

        const textColor = isWhiteType ? 'text-white' : 'text-black'
        const waveColor = isWhiteType ? 'text-black' : 'text-white'

        const textClasses = clsx(
          'uppercase',
          isFirst
            ? `${textColor} white-stroke`
            : `absolute top-0 left-0 animate-[wave_2s_ease-in-out_infinite] text-black ${waveColor}`,
          textClassName
        )

        return (
          <Component key={i} className={textClasses}>
            {text}
          </Component>
        )
      })}
    </Wrapper>
  )
}

export default WaveText
