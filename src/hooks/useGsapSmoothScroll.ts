import { useEffect } from 'react'
import { gsap } from 'gsap'

import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export const useGsapSmoothScroll = (): void => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 2 })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
