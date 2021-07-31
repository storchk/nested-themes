import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Button, Page, Heading, Typography, CallToActionSection } from './components'
import {
  VariantProps,
  ThemeProps,
  ModeProps,
  getSelectedTheme,
  useTheme,
  defaultArgTypes,
  defaultArg,
} from './helper'

export default {
  title: 'Playground',
} as Meta

type DefaultStoryProps = VariantProps & ThemeProps & ModeProps

export const Default: Story<DefaultStoryProps> = ({ theme, mode, variant }) => (
  <ThemeProvider theme={useTheme('light', getSelectedTheme('seahawks'))}>
    <Page>
      <Heading tag="h1">Hamburgerfont</Heading>
      <Typography tag="p">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Typography>
      <Button variant="prominent" />
      <CallToActionSection heading="Withoud context" />
      <CallToActionSection
        themeContext="callToActionSection"
        heading="With callToActionSection context"
      />

      <ThemeProvider theme={useTheme(mode, getSelectedTheme(theme))}>
        <Page>
          <Heading tag="h1">Hamburgerfont</Heading>
          <Typography tag="p">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </Typography>
          <Button variant={variant} />
          <CallToActionSection
            themeContext="specialCallToActionSection"
            heading="With specialCallToActionSection context"
          />
        </Page>
      </ThemeProvider>
    </Page>
  </ThemeProvider>
)

Default.args = defaultArg
Default.argTypes = defaultArgTypes
