import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeType, ThemeModeType, ThemeContextType } from '../themes';

export const useContextTheme = (): ThemeType => useContext<ThemeType>(ThemeContext);

export const useTheme = (mode: ThemeModeType | string, theme?: ThemeType): ThemeContextType => {
  const activeTheme = useContextTheme();
  const newActiveTheme: ThemeType = theme || activeTheme;

  return {
    ...newActiveTheme,
    mode: newActiveTheme.mode[mode as unknown as string],
  };
};
