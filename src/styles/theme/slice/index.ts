import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { getThemeFromStorage, saveTheme } from '../utils';
import {
  ThemeKeyType,
  DirectionKeyType,
  BorderStatusKeyType,
  ThemeState,
} from './types';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
  selectedDirection: 'ltr',
  selectedBorderStatus: 'on',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      saveTheme(action.payload);
      state.selected = action.payload;
    },
    changeDirection(state, action: PayloadAction<DirectionKeyType>) {
      state.selectedDirection = action.payload;
    },
    changeBorder(state, action: PayloadAction<BorderStatusKeyType>) {
      state.selectedBorderStatus = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
