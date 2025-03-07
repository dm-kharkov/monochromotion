import type { ReactElement } from 'react'

import clsx from 'clsx'

import AnimatedEntrance from '@/components/AnimatedEntrance'
import {
  AnimatedEntranceTextProps,
  AnimatedEntranceVariantType
} from '@/constants/interfaces'

import { splitByChart } from '@/lib/string'

const DEFAULT_DELAY = 100
const DEFAULT_DELAY_INCREMENT = 200

const AnimatedEntranceText = (
  props: AnimatedEntranceTextProps
): ReactElement => {
  const {
    className,
    component: Component = 'span',
    delay = DEFAULT_DELAY,
    delayIncrement = DEFAULT_DELAY_INCREMENT,
    hideOnLeave = true,
    text,
    textSeparator = '',
    textClassName,
    variant = AnimatedEntranceVariantType.APPEARANCE,
    ...restProps
  } = props

  const words = splitByChart(text, textSeparator)

  return (
    <div className={clsx('flex flex-wrap items-baseline', className)}>
      {words.map((word, index) => {
        const isLast = words.length - 1 === index
        const currentDelay = delay + (index * delayIncrement)

        return (
          <AnimatedEntrance
            key={index}
            delay={currentDelay}
            variant={variant}
            hideOnLeave={hideOnLeave}
            {...restProps}
          >
             <Component className={clsx(!isLast && 'mr-6', textClassName)}>
              {word}
            </Component>
          </AnimatedEntrance>
        )
      })}
    </div>
  )
}

export default AnimatedEntranceText
