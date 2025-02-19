import type { ReactElement } from 'react'

import clsx from 'clsx'

import AnimatedEntrance from '@/components/AnimatedEntrance'
import {
  AnimatedEntranceProps,
  AnimatedEntranceVariantType,
  BaseTextProps
} from '@/constants/interfaces'

import { splitByChart } from '@/lib/string'

const AnimatedEntranceText = (
  props: AnimatedEntranceTextProps
): ReactElement => {
  const {
    className,
    component: Component = 'span',
    delay = 75,
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

        return (
          <AnimatedEntrance
            key={index}
            delay={delay * index + 1}
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

interface AnimatedEntranceTextProps
  extends Omit<AnimatedEntranceProps, 'children'>,
    BaseTextProps {
  textSeparator?: string
}

export default AnimatedEntranceText
