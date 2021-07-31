import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Button } from './Button'
import {
  VariantProps,
  ThemeProps,
  getSelectedTheme,
  ModeProps,
  useTheme,
  defaultArgTypes,
  defaultArg,
} from '../../helper'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

type DefaultStoryProps = VariantProps & ThemeProps & ModeProps

export const Default: Story<DefaultStoryProps> = ({ variant, theme, mode, ...props }) => (
  <ThemeProvider theme={useTheme(mode, getSelectedTheme(theme))}>
    <Button {...props} variant={variant} />
  </ThemeProvider>
)

Default.args = defaultArg
Default.argTypes = defaultArgTypes
