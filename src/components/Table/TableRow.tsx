import React from 'react';
import styled from 'styled-components';
import { Screen } from 'constants/Screen';
import { useWindowDimensions } from 'app/common/hooks/useWindowDimensions';

export const DesktopTableRow = styled.tr<{
  noBottomBorder?: boolean;
  selectable?: boolean;
}>`
  height: 7rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 1rem;
  border-bottom: ${({ theme, noBottomBorder }) =>
    noBottomBorder ? 'none' : `1px solid ${theme.color.border}`};

  ${({ selectable, theme }) =>
    selectable &&
    `cursor: pointer; 
      &:hover { background: ${theme.color.hoverColor}; }
    `}
  transition: all 0.5s;
  width: 100%;
`;

export const TableHeadRow = styled.tr`
  height: 7rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 1rem;
  transition: all 0.3s;
  width: 100%;
`;

const MobileTableRow = styled.tr`
  background: ${({ theme }) => theme.color.bodyBackground};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 10px;
`;

interface Props {
  children: React.ReactNode;
  noBottomBorder?: boolean;
  onClick?: () => void;
  selectable?: boolean;
}

export const TableRow = ({
  children,
  onClick,
  noBottomBorder,
  selectable,
}: Props) => {
  const { width } = useWindowDimensions();

  if (width > Screen.SMALL) {
    return (
      <DesktopTableRow
        onClick={onClick}
        noBottomBorder={noBottomBorder}
        selectable={selectable}
      >
        {children}
      </DesktopTableRow>
    );
  }

  return <MobileTableRow onClick={onClick}>{children}</MobileTableRow>;
};
