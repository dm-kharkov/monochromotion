import { gsap } from 'gsap'

import {
  creativeClasses,
  heroClasses,
  videoClasses
} from '@/constants/animation'

export const creativeAnimation = () => {
  const creativeTopTl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${creativeClasses.root}`,
      start: 'top bottom',
      end: 'top bottom',
      toggleActions: 'play none reverse none'
    }
  })

  creativeTopTl.to(`.${heroClasses.wrapper}`, {
    scale: 0,
    borderRadius: '3rem',
    duration: 1
  })

  const creativeBottomTl = gsap.timeline({
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: `.${creativeClasses.root}`,
      start: 'bottom bottom',
      end: 'bottom bottom',
      toggleActions: 'play none reverse none'
    }
  })

  const rightTextCollection = gsap.utils.toArray(
    `.${creativeClasses.rightText}`
  )

  creativeBottomTl
    .to(`.${videoClasses.root}`, { position: 'fixed', top: 0 })
    .to(`.${creativeClasses.leftPanel}`, { x: '-100%', duration: 0.5 }, 0)
    .to(`.${creativeClasses.rightPanel}`, { x: '100%', duration: 0.5 }, 0)
    .to(`.${creativeClasses.leftTitle}`, { x: '-50vw', duration: 1 }, '-=0.2')
    .to(`.${creativeClasses.rightTitle}`, { x: '50vw', duration: 1 }, '<')
    .to(`.${creativeClasses.leftText}`, { y: '101%', duration: 0.5 }, '-=0.5')
    .to(rightTextCollection, { y: '101%', stagger: 0.1, duration: 0.5 }, '<')

  // Cleanup
  return (): void => {
    creativeTopTl.kill()
    creativeBottomTl.kill()
  }
}
