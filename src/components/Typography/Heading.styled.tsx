import styled, { css } from 'styled-components'
import { StyledHeadingProps } from './Typography.types'
import { ThemeContextType } from '../../themes'
import { Typography } from './Typography'

export const StyledHeading = styled(Typography)<StyledHeadingProps>`
  ${({ theme, themeContext }: { theme: ThemeContextType; themeContext?: string }) => {
    const color = themeContext
      ? // @ts-expect-error Element implicitly has an 'any' … Remove this comment to see the full description
        theme.mode[themeContext]?.typography.heading.color
      : theme.mode.typography.heading.color

    return css`
      color: ${color};
    `
  }}
`
