import { FC } from 'react'
import { StyledCallToActionSection } from './CallToActionSection.styled'
import { CallToActionSectionProps } from './CallToActionSection.types'
import { Heading } from '../Typography'
import { Button } from '../Button'

export const CallToActionSection: FC<CallToActionSectionProps> = ({ heading, themeContext }) => (
  <StyledCallToActionSection themeContext={themeContext}>
    <Heading tag="h1" themeContext={themeContext}>
      {heading}
    </Heading>
    <Button variant="prominent">Click Me</Button>
  </StyledCallToActionSection>
)
