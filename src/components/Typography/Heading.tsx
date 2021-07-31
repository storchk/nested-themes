import { FC } from 'react'
import { HeadingProps } from './Typography.types'
import { StyledHeading } from './Heading.styled'

export const Heading: FC<HeadingProps> = ({ children, tag, themeContext, ...props }) => (
  <StyledHeading {...props} tag={tag} themeContext={themeContext}>
    {children}
  </StyledHeading>
)
