import { darken } from 'polished'
import { ThemeType, ColorType, ButtonType, TypoType, CallToActionSectionType } from './types'
import { grey } from './general'

const color: ColorType = {
  primary: '#241773',
  secondary: '#9E7C0C',
}
// default light
const buttonTheme: ButtonType = {
  prominent: {
    color: {
      text: grey['50'],
      surface: color.primary,
      border: color.secondary,
    },
    hover: {
      color: {
        text: grey['100'],
        surface: darken(0.2, color.primary),
        border: color.secondary,
      },
    },
  },
  ghost: {
    color: {
      text: grey['700'],
      surface: grey['50'],
      border: grey['300'],
    },
    hover: {
      color: {
        text: grey['900'],
        surface: grey['50'],
        border: grey['500'],
      },
    },
  },
}
// default light
const typography: TypoType = {
  heading: {
    color: grey['900'],
  },
  typography: {
    color: grey['700'],
  },
}
// default
const callToActionSection: CallToActionSectionType = {
  background: grey['500'],
  typography: {
    heading: {
      color: grey['50'],
    },
  },
}
const specialCallToActionSection: CallToActionSectionType = {
  ...callToActionSection,
  background: color.secondary,
}
export const ravens: ThemeType = {
  name: 'ravens',
  color,
  mode: {
    dark: {
      name: 'dark',
      background: grey['900'],
      callToActionSection,
      specialCallToActionSection,
      typography: {
        heading: {
          color: grey['50'],
        },
        typography: {
          color: grey['600'],
        },
      },
      button: {
        ...buttonTheme,
        ghost: {
          ...buttonTheme.ghost,
          color: {
            text: grey['50'],
            surface: grey['800'],
            border: grey['800'],
          },
          hover: {
            color: {
              text: grey['50'],
              surface: grey['700'],
              border: grey['700'],
            },
          },
        },
      },
    },
    light: {
      name: 'light',
      background: grey['50'],
      callToActionSection,
      specialCallToActionSection,
      typography,
      button: buttonTheme,
    },
  },
}
