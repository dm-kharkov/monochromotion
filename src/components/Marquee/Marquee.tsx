import type { HTMLAttributes, JSX, ReactNode } from 'react'

import React from 'react'

import ReactMarquee, {
  MarqueeProps as ReactMarqueeProps
} from 'react-fast-marquee'

interface TextItemProps extends HTMLAttributes<HTMLSpanElement> {
  text: string | ReactNode
}

interface MarqueeProps extends ReactMarqueeProps {
  text: string | (string | ReactNode)[]
  textClass?: string
}

const TextItem = ({ text, ...restProps }: TextItemProps) => (
  <span {...restProps}>{text}</span>
)

const Marquee = ({
  autoFill = true,
  text,
  textClass,
  ...restProps
}: MarqueeProps): JSX.Element => {
  return (
    <ReactMarquee autoFill={autoFill} {...restProps}>
      {Array.isArray(text) ? (
        text.map((el, i) => {
          if (React.isValidElement(el)) {
            return React.cloneElement(el, { key: i })
          }

          return <TextItem text={el} className={textClass} key={i} />
        })
      ) : (
        <TextItem text={text} className={textClass} />
      )}
    </ReactMarquee>
  )
}

export default Marquee
