export type Themes = 'seahawks' | 'ravens'
export type ThemeModes = 'dark' | 'light'
export type ThemeVariant = 'prominent' | 'ghost'
export type ThemeMode = ThemeType

export type ColorType = {
  [color: string]: string
}
export type GreyColorType = {
  '50': string
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
  '800': string
  '900': string
}
export type ColorKeyTypes = keyof ColorType | string
export type GreyColorKeyType = keyof GreyColorType
export type Color = ColorKeyTypes | GreyColorKeyType

type ButtonColorType = {
  text: Color
  surface: Color
  border: Color
}
export type ButtonType = {
  [variant: string]: {
    color: ButtonColorType
    hover: {
      color: ButtonColorType
    }
  }
}
export type TypoType = {
  [variant: string]: {
    color: Color
  }
}
export type CallToActionSectionType = {
  background: Color
  typography: {
    heading: {
      color: Color
    }
  }
}

export type ThemeModeType = {
  name: ThemeModes
  background: string
  button: ButtonType
  typography: TypoType
  callToActionSection: CallToActionSectionType
  specialCallToActionSection: CallToActionSectionType
}
export type ThemeType = {
  name: Themes
  color: ColorType
  mode: {
    [mode: string]: ThemeModeType
  }
}
export type ThemeContextType = Omit<ThemeType, 'mode'> & {
  mode: ThemeModeType
}
