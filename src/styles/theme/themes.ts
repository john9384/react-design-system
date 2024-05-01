import { ImageAssets } from 'assets/images/ImageAssets';
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
  logo: ImageAssets.LOGO_WHITE,
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
  businessLogoPlaceholder: ImageAssets.BUSINESS_LOGO_PLACEHOLDER_BLUE,
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
  logo: ImageAssets.LOGO_DARK,
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
  businessLogoPlaceholder: ImageAssets.BUSINESS_LOGO_PLACEHOLDER_WHITE,
};

const lightThemeShadow = {
  small: '0px 0px 10px 1px rgba(0, 0, 0, 0.02)',
  regular: '0px 0px 10px 1px rgba(232, 232, 232, 0.5)',
  large: '0px 0px 5px 1px #E8E8E8',
};

const darkThemeShadow: ShadowTheme = {
  small: '0px 0px 5px 1px rgba(0, 0, 0, 0.05)',
  regular: '0px 0px 15px 1px rgba(0, 0, 0, 0.5)',
  large: '0px 0px 5px 1px #E8E8E8',
};

const ltr = {
  direction: 'ltr',

  right: 'right',
  left: 'left',

  'margin-right': 'margin-right',
  'margin-left': 'margin-left',

  'padding-left': 'padding-left',
  'padding-right': 'padding-right',

  'border-top-left-radius': 'border-top-left-radius',
  'border-bottom-left-radius': 'border-bottom-left-radius',

  'border-top-right-radius': 'border-top-right-radius',
  'border-bottom-right-radius': 'border-bottom-right-radius',

  'border-left': 'border-left',
  'border-right': 'border-right',

  translate: 'translate(-50%, -50%);',
  mirrorY: 'scale(1, 1)',

  'border-right-color': 'border-right-color',

  'transform-sidebar': 'rotate(90deg)',

  'flex-flow': 'row nowrap',
  row: 'row',

  'sidebar-close': 'translateX(0)',
  'sidebar-no-desktop': 'translateX(calc(0%))',
  '-': '-',
};

const rtl: Direction = {
  direction: 'rtl',

  right: 'left',
  left: 'right',

  'margin-right': 'margin-left',
  'margin-left': 'margin-right',

  'padding-left': 'padding-right',
  'padding-right': 'padding-left',

  'border-top-left-radius': 'border-top-right-radius',
  'border-bottom-left-radius': 'border-bottom-right-radius',

  'border-top-right-radius': 'border-top-left-radius',
  'border-bottom-right-radius': 'border-bottom-left-radius',

  'border-left': 'border-right',
  'border-right': 'border-left',

  translate: 'translate(50%, -50%);',
  mirrorY: 'scale(1, -1)',

  'border-right-color': 'border-left-color',
  'transform-sidebar': 'rotate(-90deg)',

  'flex-flow': 'row-reverse nowrap',
  row: 'row-reverse',

  'sidebar-close': 'translateX(0)',
  'sidebar-no-desktop': 'translateX(calc(100%))',
  '-': '+',
};

const roundBordersOn = {
  borderRadius: '15px',
};

const roundBordersOff: BorderStatus = {
  borderRadius: '5px',
};

const shadowOn = {
  blocksShadows: '0 10px 30px 1px rgba(0, 0, 0, 0.06)',
};

export type ColorTheme = typeof lightThemeColors;
export type ShadowTheme = typeof lightThemeShadow;
export type Direction = typeof ltr;
export type BorderStatus = typeof roundBordersOn;
export type ShadowStatus = typeof shadowOn;

export const themes = {
  colors: {
    light: lightThemeColors,
    dark: darkThemeColors,
  },
  shadow: {
    light: lightThemeShadow,
    dark: darkThemeShadow,
  },
  directions: {
    ltr: ltr,
    rtl: rtl,
  },
  borderStatus: {
    on: roundBordersOn,
    off: roundBordersOff,
  },
};
