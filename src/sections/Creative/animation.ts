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

  creativeTopTl
    .to(`.${heroClasses.wrapper}`, { scaleX: 1, scaleY: 0.002, duration: 0.5 })
    .to(`.${heroClasses.wrapper}`, {
      scaleX: 0.2,
      scaleY: 0.002,
      duration: 0.5
    })
    .to(`.${heroClasses.wrapper}`, {
      scaleX: 0,
      scaleY: 0,
      duration: 0.3
    })

  const creativeBottomTl = gsap.timeline({
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: `.${creativeClasses.root}`,
      start: 'top top',
      end: 'top top',
      toggleActions: 'play none reverse none'
    }
  })

  const rightTextCollection = gsap.utils.toArray(
    `.${creativeClasses.rightText}`
  )

  creativeBottomTl
    .to(`.${creativeClasses.leftPanel}`, { position: 'fixed', top: 0 }, 0)
    .to(`.${creativeClasses.rightPanel}`, { position: 'fixed', top: 0 }, 0)
    .to(`.${videoClasses.root}`, { position: 'fixed', top: 0 }, 0)
    .to(`.${creativeClasses.leftPanel}`, { x: '-100%', duration: 0.5 }, 0)
    .to(`.${creativeClasses.rightPanel}`, { x: '100%', duration: 0.5 }, 0)
    .to(`.${creativeClasses.leftTitle}`, { x: '-50vw' }, '-=0.2')
    .to(`.${creativeClasses.rightTitle}`, { x: '50vw' }, '<')
    .to(`.${creativeClasses.leftText}`, { y: '101%', duration: 0.5 }, '-=0.5')
    .to(rightTextCollection, { y: '101%', stagger: 0.1, duration: 0.5 }, '<')

  // Cleanup
  return (): void => {
    creativeTopTl.kill()
    creativeBottomTl.kill()
  }
}
