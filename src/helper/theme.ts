import {
  Themes, ThemeType, ravens, seahawks,
} from '../themes';

export const getSelectedTheme = (theme: Themes): ThemeType => {
  switch (theme) {
    case 'ravens':
      return ravens;
    default:
      return seahawks;
  }
};
