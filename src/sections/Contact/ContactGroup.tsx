import type { ReactElement } from 'react'

import clsx from 'clsx'

import AnimatedEntrance from '@/components/AnimatedEntrance'

import { ContactGroupProps } from '@/constants/interfaces'

const ContactGroup = ({
  className,
  collection
}: {
  className?: string
  collection: ContactGroupProps[]
}): ReactElement => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-[2rem] font-poppins font-medium text-black',
        className
      )}
    >
      {collection.map(({ caption, list }, i) => (
        <div key={i}>
          <AnimatedEntrance delay={300} hideOnLeave>
            <small>{caption}</small>
          </AnimatedEntrance>

          <ul className='flex flex-col items-start text-[2rem]'>
            {list.map(({ label, path }, j) => (
              <li key={j}>
                <AnimatedEntrance
                  delay={j * 50}
                  variant='appearance'
                  hideOnLeave
                >
                  <a
                    className='link'
                    href={path}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    {label}
                  </a>
                </AnimatedEntrance>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ContactGroup
