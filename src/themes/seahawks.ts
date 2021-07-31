import { ThemeType, ButtonType, ColorType, TypoType, CallToActionSectionType } from './types'
import { grey } from './general'

const color: ColorType = {
  primary: '#69BE28',
  secondary: '#002244',
}
// default light
const buttonTheme: ButtonType = {
  prominent: {
    color: {
      text: grey['50'],
      surface: color.primary,
      border: color.primary,
    },
    hover: {
      color: {
        text: grey['100'],
        surface: color.secondary,
        border: color.secondary,
      },
    },
  },
  ghost: {
    color: {
      text: grey['800'],
      surface: grey['50'],
      border: grey['400'],
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

export const seahawks: ThemeType = {
  name: 'seahawks',
  color,
  mode: {
    dark: {
      name: 'dark',
      background: grey['800'],
      callToActionSection,
      specialCallToActionSection,
      typography: {
        heading: {
          color: grey['50'],
        },
        typography: {
          color: grey['200'],
        },
      },
      button: {
        ...buttonTheme,
        ghost: {
          ...buttonTheme.ghost,
          color: {
            text: grey['400'],
            surface: grey['800'],
            border: grey['400'],
          },
          hover: {
            color: {
              text: grey['300'],
              surface: grey['800'],
              border: grey['200'],
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
