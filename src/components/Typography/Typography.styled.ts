import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { StyledTypographyProps } from './Typography.types'
import { ThemeContextType } from '../../themes'

const getFontStyle = (tag: string): FlattenSimpleInterpolation => {
  switch (tag) {
    case 'h1':
      return css`
        font-weight: 700;
        font-size: 1.6em;
      `
    case 'h2':
      return css`
        font-weight: 700;
        font-size: 1.4em;
      `
    case 'h3':
      return css`
        font-weight: 700;
        font-size: 1.2em;
      `
    case 'h4':
      return css`
        font-weight: 400;
        font-size: 1em;
      `
    case 'h5':
      return css`
        font-weight: 700;
        font-size: 0.8em;
      `
    case 'h6':
      return css`
        font-weight: 400;
        font-size: 0.8em;
      `
    default:
      return css`
        font-weight: 300;
        font-size: 0.8em;
      `
  }
}
export const StyledTypography = styled.div<StyledTypographyProps>`
  ${({ theme, tag }: { theme: ThemeContextType; tag: string }) => css`
    color: ${theme.mode.typography.typography.color};
    font-family: 'Ubuntu', sans-serif;
    ${getFontStyle(tag)}
  `}
`
