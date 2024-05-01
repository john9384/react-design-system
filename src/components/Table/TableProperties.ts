import styled from 'styled-components';
import { Colors } from 'constants/Colors';
import { Dimensions } from 'constants/Dimensions';
import { TableCellProps } from './types';

export const TableHead = styled.thead`
  border-bottom: 1px solid ${Colors.GRAY200};
  width: fit-content;
`;

export const TableHeadCell = styled.th<TableCellProps>`
  ${({ flex }) => flex && `flex: ${flex}`};
  width: ${({ width }) => (width ? Dimensions[width] : 'fit-content')};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const TableCell = styled.td<TableCellProps>`
  ${({ flex }) => flex && `flex: ${flex}`};
  width: ${({ width }) => (width ? Dimensions[width] : 'fit-content')};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  position: relative;
`;
