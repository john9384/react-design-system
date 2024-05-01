import 'styled-components';
import {
  Theme as ColorTheme,

} from './themes';

export type Theme = {
  color: ColorTheme;
  border: BorderStatus;
};

export type ThemeClasses = {
  color: 'theme-dark' | 'theme-light';
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
