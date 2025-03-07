'use client'

import type { ReactElement } from 'react'

import React from 'react'
import clsx from 'clsx'

import Waypoint from '@/components/Waypoint'

import {
  AnimatedEntranceProps,
  AnimatedEntranceVariantType
} from '@/constants/interfaces'

import './styles.scss'

const AnimatedEntrance = (props: AnimatedEntranceProps): ReactElement => {
  const {
    children,
    className,
    delay = 0,
    direction = 'up',
    hideOnLeave = false,
    showClassName,
    showOnMount = false,
    transform = true,
    wrap = false,
    variant = AnimatedEntranceVariantType.ANIMATED
  } = props

  const mounted = React.useRef(true)
  const [show, setShow] = React.useState(false)

  const animatedClassName = clsx(
    'animated',
    !showClassName && transform && `${direction}Show`,
    !transform && 'opacity-0',
    hideOnLeave && 'hideOnLeave',
    className,
    show && (showClassName || 'animatedShow')
  )

  const appearanceClassName = clsx('appearance', show && 'appearanceShow')

  const handleEntrance = () => {
    setTimeout(() => {
      if (mounted.current) {
        setShow(true)
      }
    }, delay)
  }

  const handleLeaving = () => {
    if (mounted.current) {
      setShow(false)
    }
  }

  React.useEffect(() => {
    if (showOnMount) {
      handleEntrance()
    }

    return () => {
      mounted.current = false
    }
  }, [showOnMount])

  return (
    <>
      {!showOnMount && (
        <Waypoint
          onLeave={hideOnLeave ? handleLeaving : () => null}
          onEnter={handleEntrance}
        />
      )}

      {variant === AnimatedEntranceVariantType.ANIMATED &&
        (wrap ? (
          <div className={animatedClassName}>{children}</div>
        ) : (
          React.Children.map(
            children as
              | React.ReactElement<{ className?: string }>
              | React.ReactElement<{ className?: string }>[],
            (child) => {
              return React.cloneElement(child, {
                className: clsx(child.props.className, animatedClassName)
              })
            }
          )
        ))}

      {variant === AnimatedEntranceVariantType.APPEARANCE && (
        <div className={clsx('overflow-hidden', className)}>
          <div className={appearanceClassName}>{props.children}</div>
        </div>
      )}
    </>
  )
}

export default AnimatedEntrance
