import styled from 'styled-components';

export const BoxStyled = styled.div<{}>`
  display: ${(p) => (p.grid ? 'grid' : 'flex')};
  &.flex {
    display: flex;

    &.flexCol {
      flex-direction: column;
    }

    &.flexRow {
      flex-direction: row;
    }

    &.spaceBetween {
      justify-content: space-between;
    }
  }
`;
