import type { ReactElement, RefObject } from 'react'

import React from 'react'

import useIntersection from '@/hooks/useIntersection'
import useUpdateEffect from '@/hooks/useUpdateEffect'

const Waypoint = ({
  options = {},
  onEnter,
  onLeave
}: {
  options?: IntersectionObserverInit
  onEnter: () => void
  onLeave?: () => void
}): ReactElement => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { isIntersecting } =
    useIntersection(ref as RefObject<HTMLDivElement>, options) || {}

  useUpdateEffect((): void => {
    if (isIntersecting) {
      onEnter && onEnter()
    } else {
      onLeave && onLeave()
    }
  }, [isIntersecting])

  return <div ref={ref} />
}

export default Waypoint
