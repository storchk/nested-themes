import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Page } from './Page'
import { Button } from '../Button'
import {
  useTheme,
  ThemeProps,
  ModeProps,
  VariantProps,
  getSelectedTheme,
  defaultArgTypes,
  defaultArg,
} from '../../helper'
import { variantArg } from '../../helper/argTypes'

export default {
  title: 'Pages/Page',
  component: Page,
} as Meta

type DefaultStoryProps = ThemeProps & ModeProps & VariantProps

export const Default: Story<DefaultStoryProps> = ({ theme, mode, variant, ...props }) => (
  <ThemeProvider theme={useTheme(mode, getSelectedTheme(theme))}>
    <Page {...props}>
      <Button variant={variant} />
    </Page>
  </ThemeProvider>
)

Default.args = defaultArg
Default.argTypes = defaultArgTypes
