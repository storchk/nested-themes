import { FC } from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button: FC<ButtonProps> = ({ variant, ...props }) => (
  <StyledButton {...props} type="button" variant={variant}>
    Click Me
  </StyledButton>
);
