import { FC } from 'react'
import { TypographyProps } from './Typography.types'
import { StyledTypography } from './Typography.styled'

export const Typography: FC<TypographyProps> = ({ children, tag, ...props }) => {
  return (
    <StyledTypography {...props} tag={tag} as={tag}>
      {children}
    </StyledTypography>
  )
}
