import { ReactNode } from 'react'

export type TypographyProps = {
  tag: keyof JSX.IntrinsicElements
  children: ReactNode | string
}
export type StyledTypographyProps = {
  as: string
  tag: string
  children: ReactNode | string
}
export type HeadingProps = {
  tag: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
  children: ReactNode
  themeContext?: string
}
export type StyledHeadingProps = HeadingProps
