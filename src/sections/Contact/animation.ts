import { gsap } from 'gsap'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

import { contactClasses } from '@/constants/animation'

export const contactAnimation = async () => {
  const Splitting = (await import('splitting')).default

  Splitting()

  const chars = document.querySelectorAll(
    `.${contactClasses.textWrapper} .char`
  )

  chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }))

  const MAX_DISTANCE = 300
  const MAX_FONT_WEIGHT = 800
  const MIN_FONT_WEIGHT = 300

  const events = ['mousemove', 'mouseover']

  const handleEvent = (e: Event) => {
    const mouseEvent = e as MouseEvent
    const mouseX = mouseEvent.pageX
    const mouseY = mouseEvent.pageY

    chars.forEach((char) => {
      const charRect = char.getBoundingClientRect()

      const charCenterX = charRect.left + charRect.width / 2 + window.scrollX
      const charCenterY = charRect.top + charRect.height / 2 + window.scrollY

      const distance = Math.sqrt(
        Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2)
      )

      const fontWeight =
        distance < MAX_DISTANCE
          ? gsap.utils.mapRange(
              0,
              MAX_DISTANCE,
              MIN_FONT_WEIGHT,
              MAX_FONT_WEIGHT,
              Math.max(0, MAX_DISTANCE - distance)
            )
          : MIN_FONT_WEIGHT

      gsap.to(char, { fontWeight, duration: 0.5 })
    })
  }

  events.forEach((event) => {
    document.addEventListener(event, handleEvent)
  })

  // Cleanup
  return (): void => {
    events.forEach((event) => {
      document.removeEventListener(event, handleEvent)
    })
  }
}
