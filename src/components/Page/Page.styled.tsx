import styled, { css } from 'styled-components'
import { ThemeContextType } from '../../themes'
import { PageProps } from './Page.types'

export const StyledPage = styled.div<PageProps>`
  ${({ theme }: { theme: ThemeContextType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 2em;
    background-color: ${theme.mode.background};
    overflow: hidden;
  `}
`
