import { ThemeType, ColorType } from './types'
import { seahawks, ravens } from '.'

const color: ColorType = {
  primary: '#C9002B',
  secondary: '#004B93',
}

export const pepsiSeahawks: ThemeType = {
  ...seahawks,
  color,
  mode: {
    ...seahawks.mode,
    dark: {
      ...seahawks.mode.dark,
      specialCallToActionSection: {
        ...seahawks.mode.dark.specialCallToActionSection,
        background: color.primary,
      },
    },
    light: {
      ...seahawks.mode.light,
      specialCallToActionSection: {
        ...seahawks.mode.light.specialCallToActionSection,
        background: color.primary,
      },
    },
  },
}
export const pepsiRavens: ThemeType = {
  ...ravens,
  color,
  mode: {
    ...ravens.mode,
    dark: {
      ...ravens.mode.dark,
      specialCallToActionSection: {
        ...ravens.mode.light.specialCallToActionSection,
        background: color.primary,
      },
    },
    light: {
      ...ravens.mode.light,
      specialCallToActionSection: {
        ...ravens.mode.light.specialCallToActionSection,
        background: color.primary,
      },
    },
  },
}
