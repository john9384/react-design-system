import { useWindowDimensions } from 'app/common/hooks/useWindowDimensions';
import styled from 'styled-components';
import { customMedia } from 'styles/media';
import { Screen } from 'constants/Screen';

const DesktopTableBody = styled.tbody`
  width: max-content;
  height: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0;
  }

  ${customMedia.greaterThan('xxlarge')`
    width: 100%;
  `}
`;

const MobileTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 100%;
`;

export const TableBody = ({ children }) => {
  const { width } = useWindowDimensions();
  if (width > Screen.SMALL) {
    return <DesktopTableBody>{children}</DesktopTableBody>;
  }

  return <MobileTableBody>{children}</MobileTableBody>;
};
