import { FC } from 'react';
import { PageProps } from './Page.types';
import { StyledPage } from './Page.styled';

export const Page: FC<PageProps> = ({ children, ...props }) => (
  <StyledPage {...props}>{children}</StyledPage>
);
