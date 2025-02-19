'use client'

import type { ReactElement } from 'react'

import React from 'react'

import AngledSlider from '@/components/AngledSlider'

import useMedia from '@/hooks/useMedia'
import { videoCollection } from '@/constants/data'

const VideoGroup = ({
  className,
  list = videoCollection
}: {
  className?: string
  list?: string[]
}): ReactElement => {
  const [slides, setSlides] = React.useState(list)

  const isDownMd = useMedia('(max-width: 480px)')

  React.useEffect(() => {
    if (isDownMd) {
      setSlides(list.slice(0, 3))
    } else {
      setSlides(list)
    }
  }, [isDownMd, list])

  return <AngledSlider className={className} slides={slides} />
}

export default VideoGroup
