import type { ElementType, ReactNode } from 'react'

import { gsap } from 'gsap'

export interface ChildrenProps {
  children: ReactNode
}

const ANIMATED = 'animated' as const
const APPEARANCE = 'appearance' as const

export const AnimatedEntranceVariantType = {
  ANIMATED,
  APPEARANCE
}

export interface AnimatedEntranceProps extends ChildrenProps {
  className?: string
  delay?: number
  direction?: 'right' | 'up' | 'down' | 'left'
  hideOnLeave?: boolean
  showClassName?: string
  showOnMount?: boolean
  transform?: boolean
  variant?: typeof ANIMATED | typeof APPEARANCE
  wrap?: boolean
}

export interface BaseTextProps {
  component?: ElementType
  text: string
  textClassName?: string
}

type MatchMedia = ReturnType<typeof gsap.matchMedia>

export interface GsapMatchMediaProps {
  matchMedia: MatchMedia
}

interface ContactGroupItemProps {
  label: string
  path: string
}

export interface ContactGroupProps {
  caption: string
  list: ContactGroupItemProps[]
}
