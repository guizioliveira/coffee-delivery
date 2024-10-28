import { ReactNode } from 'react'
import {
  Box as BoxComponent,
  BoxContent,
  Title,
  Description,
  Icon,
  IconColors,
} from './styles'

interface BoxProps {
  title?: string
  description?: string
  icon?: { color: IconColors; element: ReactNode }
  children: ReactNode
}

function Box(props: BoxProps) {
  return (
    <BoxComponent>
      <BoxContent gap={12}>
        {props.icon && (
          <Icon color={props.icon.color!}>{props.icon.element}</Icon>
        )}
        <div>
          {props.title && <Title>{props.title}</Title>}
          {props.description && <Description>{props.description}</Description>}
        </div>
      </BoxContent>
      {props.children}
    </BoxComponent>
  )
}

export { BoxContent as content }
export { Box as root }
