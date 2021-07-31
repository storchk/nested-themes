import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { useTheme, ThemeProps, ModeProps, getSelectedTheme } from '../../helper'
import { modeArg, modeArgType, themeArg, themeArgType } from '../../helper/argTypes'
import { TypographyProps, HeadingProps } from './Typography.types'
import { Typography as TypographyComponent } from './Typography'
import { Heading as HeadingComponent } from './Heading'

export default {
  title: 'Components/Typography',
} as Meta

type TypographyStoryProps = ThemeProps & ModeProps & { text: string } & Pick<TypographyProps, 'tag'>
type HeadingStoryProps = ThemeProps & ModeProps & { text: string } & Pick<HeadingProps, 'tag'>

export const Typography: Story<TypographyStoryProps> = ({ theme, mode, text, tag }) => (
  <ThemeProvider theme={useTheme(mode, getSelectedTheme(theme))}>
    <TypographyComponent tag={tag}>{text}</TypographyComponent>
  </ThemeProvider>
)
export const Heading: Story<HeadingStoryProps> = ({ theme, mode, text, tag }) => (
  <ThemeProvider theme={useTheme(mode, getSelectedTheme(theme))}>
    <HeadingComponent tag={tag}>{text}</HeadingComponent>
  </ThemeProvider>
)

Typography.args = {
  text: 'Hamburgerfont',
  tag: 'p',
  ...themeArg,
  ...modeArg,
}
Typography.argTypes = {
  ...themeArgType,
  ...modeArgType,
  tag: {
    control: {
      type: 'select',
      options: ['p', 'span', 'div'],
    },
  },
}
Heading.args = {
  text: 'Hamburgerfont',
  tag: 'h1',
  ...themeArg,
  ...modeArg,
}
Heading.argTypes = {
  ...themeArgType,
  ...modeArgType,
  tag: {
    control: {
      type: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
}
