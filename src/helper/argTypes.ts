import { ThemeModes, Themes, ThemeVariant } from '../themes'

export const modeArgType = {
  mode: {
    control: {
      type: 'select',
      options: ['dark', 'light'],
    },
  },
}
export const themeArgType = {
  theme: {
    control: {
      type: 'select',
      options: ['seahawks', 'ravens'],
    },
  },
}
export const variantArgType = {
  variant: {
    control: {
      type: 'select',
      options: ['prominent', 'ghost'],
    },
  },
}
export const themeArg = {
  theme: 'seahawks' as Themes,
}
export const modeArg = {
  mode: 'light' as ThemeModes,
}
export const variantArg = {
  variant: 'prominent' as ThemeVariant,
}

export const defaultArgTypes = {
  ...themeArgType,
  ...modeArgType,
  ...variantArgType,
}
export const defaultArg = {
  ...themeArg,
  ...modeArg,
  ...variantArg,
}
