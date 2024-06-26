
import { Colors } from 'constants/Colors';

const lightThemeColors = {
  additionalText: '#646777',
  background: Colors.WHITE,
  blackText: Colors.BLACK,
  bodyBackground: Colors.LIGHT_BODY_BACKGROUND,
  tableHeader: Colors.TABLE_HEADER,
  boldText: Colors.GRAY900,
  border: Colors.GRAY300,
  checkBoxColor: Colors.GRAY400,
  clipLoader: Colors.PRIMARY,
  colorBubble: 'rgba(242, 244, 247, 0.65)',
  colorBubbleActive: 'rgba(234, 238, 255, 0.6)',
  colorEmoji: '#232329',
  colorFieldsBorder: '#f2f4f7',
  colorFitness: '#646777',
  colorFolderHover: '#f0eeee',
  colorHeaderDataPicker: '#6db0ff',
  colorScrollbar: '#B4BFD0',
  colorSearch: '#f2f4f7',
  countBar: '#F8F9FA',
  countDownColor: Colors.BLACK,
  dateMonthName: '#c5c0db',
  datePickerDisabledDayText: Colors.RED200,
  disabledInput: Colors.GRAY300,
  errorInputText: Colors.GRAY700,
  greyText: Colors.GRAY600,
  hoverColor: '#fafbfe',
  icon: Colors.LIGHT_ICON,
  inboxButtonBackground: '#f2f4f7',
  inboxButtonBackgroundHover: 'rgba(242, 244, 247, 0.05)',
  inputBackground: Colors.LIGHT_BODY_BACKGROUND,
  inputPlaceholderText: Colors.GRAY600,
  inputText: Colors.GRAY900,
  mobileTableRowBackground: '#f8f9fa',
  primary: Colors.PRIMARY,
  scrollBarTrack: Colors.BACKGROUND_BODY,
  sidebarColor: 'aliceblue',
  stepIndicatorColor: Colors.GRAY200,
  tagBackgroundColor: Colors.GRAY500,
  tagTextColor: Colors.WHITE,
  text: Colors.LIGHT_TEXT,
  themedInputText: Colors.GRAY100,
  themedPlaceholderText: Colors.GRAY600,
  variationTableHeaderBG: Colors.GRAY200,
};

const darkThemeColors: ColorTheme = {
  primary: Colors.PRIMARY,
  background: Colors.DARK_BACKGROUND,
  bodyBackground: Colors.DARK_BODY_BACKGROUND,
  tableHeader: Colors.WHITE,
  colorHeaderDataPicker: '#063263',
  countBar: Colors.DARK_BODY_BACKGROUND,
  text: Colors.DARK_TEXT,
  additionalText: '#999999',
  boldText: Colors.WHITE,
  blackText: Colors.WHITE,
  greyText: Colors.WHITE,
  hoverColor: '#38373f',
  colorFolderHover: '#ffffff1A',
  border: Colors.GRAY900,
  icon: Colors.DARK_ICON,
  colorFieldsBorder: '#33333a',
  colorBubble: 'rgba(68, 79, 97, 0.65)',
  colorBubbleActive: 'rgba(92, 104, 156, 0.6)',
  colorScrollbar: '#606071',
  colorFitness: '#ffffff',
  colorEmoji: '#ffffff',
  inboxButtonBackground: '#2a2a31',
  inboxButtonBackgroundHover: 'rgba(42, 42, 49, 0.05)',
  sidebarColor: '#232329',
  inputBackground: Colors.DARK_BODY_BACKGROUND,
  inputText: Colors.GRAY200,
  themedInputText: Colors.GRAY200,
  inputPlaceholderText: Colors.GRAY600,
  themedPlaceholderText: Colors.GRAY600,
  errorInputText: Colors.GRAY700,
  dateMonthName: '#7d7c83',
  colorSearch: '#2a2a31',
  mobileTableRowBackground: '#2a2a31',
  datePickerDisabledDayText: Colors.RED200,
  stepIndicatorColor: Colors.GRAY500,
  checkBoxColor: Colors.GRAY600,
  countDownColor: Colors.WHITE,
  clipLoader: Colors.PRIMARY,
  disabledInput: Colors.GRAY1000,
  tagBackgroundColor: Colors.GRAY700,
  tagTextColor: Colors.WHITE,
  variationTableHeaderBG: Colors.GRAY700,
  scrollBarTrack: Colors.DARK_BACKGROUND,
};

export type ColorTheme = typeof lightThemeColors;

export const themes = {
  colors: {
    light: lightThemeColors,
    dark: darkThemeColors,
  },

};
