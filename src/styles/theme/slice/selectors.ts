import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/types';
import { initialState } from '.';
import { themes } from '../themes';
import { isSystemDark } from '../utils';

export const selectedTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? 'dark' : 'light';
    }

    return theme.selected;
  },
);
export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.colors.dark : themes.colors.light;
    }
    return themes.colors[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);

export const selectDirection = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    return themes.directions[theme.selectedDirection];
  },
);

export const selectDirectionKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selectedDirection,
);

export const selectBorder = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    return themes.borderStatus[theme.selectedBorderStatus];
  },
);

export const selectBorderKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selectedBorderStatus,
);

export const selectShadow = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.shadow.dark : themes.shadow.light;
    }
    return themes.shadow[theme.selected];
  },
);
