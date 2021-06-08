import styled from 'styled-components';

type Props = {
  checked?: boolean;
  compact?: boolean;
  colorScheme?: string;
  disabled?: boolean;
};

const getBorderColor = ({ checked, colorScheme }) => {
  if (checked) {
    return colorScheme || 'var(--zati-color-blue-light)';
  } else {
    return 'var(--zati-defaults-color-border)';
  }
};

export const CheckboxStyled = styled.div<Props>`
  align-items: center;
  cursor: pointer;
  display: flex;
  background-color: var(--zati-color-white);
  border: 1px solid ${getBorderColor};
  border-radius: 4px;
  color: ${(p) => p.colorScheme || 'var(--zati-color-blue)'};
  justify-content: center;
  height: 24px;
  outline: none;
  position: relative;
  width: 24px;

  &:focus,
  &:hover {
    border-color: var(--zati-color-blue-light);
  }

  input {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .compact {
    height: 18px;
    width: 18px;
  }
`;

export type CheckboxStyleProps = Props;
