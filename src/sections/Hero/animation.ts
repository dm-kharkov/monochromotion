import { gsap } from 'gsap'
import Flip from 'gsap/dist/Flip'

import { GsapMatchMediaProps } from '@/constants/interfaces'
import { heroClasses } from '@/constants/animation'

import { gsapSmoothScroll } from '@/lib/lenis'

gsap.registerPlugin(Flip)

const SHOW = { opacity: 1 }

function mobileHeroAnimation({ matchMedia }: GsapMatchMediaProps) {
  const state = Flip.getState(`.${heroClasses.titleFirstWrapper}`)

  gsap.set(`.${heroClasses.titleFirstWrapper}`, {
    ...SHOW,
    transform: 'scale(2.3)'
  })

  gsap.set(`.${heroClasses.bgOverlay}`, SHOW)

  const heroTitleCollection = document.querySelectorAll(
    `.${heroClasses.subtitleWord}`
  )

  heroTitleCollection.forEach((title) => {
    gsap.set(title, { y: '100%' })
  })

  const initialHeroTl = gsap.timeline({})

  initialHeroTl
    .to(`.${heroClasses.bgOverlay}`, {
      background:
        'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) center / 250% 250% no-repeat',
      duration: 1.5,
      ease: 'power2.out'
    })
    .fromTo(
      `.${heroClasses.titleFirstText}`,
      { opacity: 1, y: '100%' },
      { y: 0, duration: 0.5 }
    )

  matchMedia.add('(max-width: 1399px)', () => {
    initialHeroTl.add(
      Flip.to(state, {
        ease: 'power2.out',
        scale: true,
        duration: 1.2
      }),
      '-=0.5'
    )
  })

  initialHeroTl.add(() => {
    heroTitleCollection.forEach((title, index) => {
      gsap.to(title, {
        y: '0%',
        duration: 1,
        delay: index * 0.1,
        ease: 'power2.out'
      })
    })

    gsap.to('body', { overflowY: 'auto' })
    gsapSmoothScroll()
  }, '+=0.5')

  const scrollHeroTl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${heroClasses.root}`,
      start: 'top+=1% top',
      end: 'top+=25% top',
      toggleActions: 'play none reverse none'
    }
  })

  scrollHeroTl
    .to(`.${heroClasses.titleFirst}`, { y: '100%' })
    .to(`.${heroClasses.titleSecond}`, { y: '0%' }, '+=0.3')
    .to(`.${heroClasses.titleSecond}`, { y: '100%' }, '+=0.7')
    .to(`.${heroClasses.titleThird}`, { y: '0%' }, '+=0.3')

  // Cleanup
  return () => {
    initialHeroTl.kill()
    scrollHeroTl.kill()
  }
}

function desktopHeroAnimation(props: GsapMatchMediaProps) {
  gsap.set(`.${heroClasses.titleSecondWrapper}`, {
    transform: 'scale(1.8)'
  })

  mobileHeroAnimation(props)
}

export const heroAnimation = () => {
  const matchMedia = gsap.matchMedia()

  matchMedia.add('(max-width: 1399px)', () =>
    mobileHeroAnimation({ matchMedia })
  )

  matchMedia.add('(min-width: 1400px)', () =>
    desktopHeroAnimation({ matchMedia })
  )

  const handleAnimateHeroBg = (e: globalThis.MouseEvent): void => {
    const target = e.target as HTMLElement
    if (target && target.style) {
      target.style.setProperty('--x', `${e.clientX}px`)
      target.style.setProperty('--y', `${e.clientY}px`)
    }
  }

  window.addEventListener('mousemove', handleAnimateHeroBg)

  // Cleanup
  return (): void => {
    window.removeEventListener('mousemove', handleAnimateHeroBg)
    matchMedia.revert()
  }
}
