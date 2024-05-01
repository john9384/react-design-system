import { DimensionType } from 'constants/Dimensions';

export type BorderWidthType = 'D1' | 'D2' | 'NONE';

export interface Border {
  all?: BorderWidthType;
  top?: BorderWidthType;
  right?: BorderWidthType;
  bottom?: BorderWidthType;
  left?: BorderWidthType;
}

export interface TableProps {
  border?: DimensionType | Border;
}

export interface TableCellProps {
  width?: DimensionType;
  flex?: 1 | 2 | 3 | 4 | 5 | 6 | number;
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
}
