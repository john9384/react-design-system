import styled from 'styled-components';
import { Dimensions } from 'constants/Dimensions';
import { TableProps } from './types';

export const Table = styled.table<TableProps>`
  border-top: ${({ border, theme }) => {
    if (typeof border !== 'string') {
      if (border?.top === 'NONE') return 'none';
      return `${Dimensions[`${border?.top}`]} solid ${theme.color.border}`;
    }
  }};

  border-right: ${({ border, theme }) => {
    if (typeof border !== 'string') {
      if (border?.right === 'NONE') return 'none';
      return `${Dimensions[`${border?.right}`]} solid ${theme.color.border}`;
    }
  }};

  border-bottom: ${({ border, theme }) => {
    if (typeof border !== 'string') {
      if (border?.bottom === 'NONE') return 'none';
      return `${Dimensions[`${border?.bottom}`]} solid ${theme.color.border}`;
    }
  }};

  border-left: ${({ border, theme }) => {
    if (typeof border !== 'string') {
      if (border?.left === 'NONE') return 'none';
      return `${Dimensions[`${border?.left}`]} solid ${theme.color.border}`;
    }
  }};
  display: table;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0px;
  }

  position: relative;
  flex: 1;
`;
