import styled, { css } from 'styled-components';
import { ThemeContextType, ThemeVariant } from '../../themes';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, variant }: { theme: ThemeContextType; variant: ThemeVariant }) => css`
    width: 120px;
    height: 50px;
    background: ${theme.mode.button[variant].color.surface};
    padding: 0 24px;
    color: ${theme.mode.button[variant].color.text};
    border: 1px solid ${theme.mode.button[variant].color.border};

    &:hover {
      color: ${theme.mode.button[variant].hover.color.text};
      background: ${theme.mode.button[variant].hover.color.surface};
      border-color: ${theme.mode.button[variant].hover.color.border};
    }
  `}
`;
