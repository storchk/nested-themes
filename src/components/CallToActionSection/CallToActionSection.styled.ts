import styled, { css } from 'styled-components'
import { ThemeContextType } from '../../themes'
import { StyledCallToActionSectionProps } from './CallToActionSection.types'

export const StyledCallToActionSection = styled.section<StyledCallToActionSectionProps>`
  ${({ theme, themeContext }: { theme: ThemeContextType; themeContext?: string }) => {
    const color = themeContext
      ? // @ts-expect-error
        theme.mode[themeContext].background
      : theme.color.primary
    return css`
      background: ${color};
      width: 100%;
      margin: 1em 0;
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `
  }}
`
