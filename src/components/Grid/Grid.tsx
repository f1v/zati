import { css } from 'styled-components';
import React from 'react';

type Props = {
  columns?: number;
  gridGap?: string;
};

export const Grid: React.FC<Props> = ({ children, columns, gridGap }) => (
  <div
    className={css`
      display: grid;
      gap: ${gridGap};
      grid-template-columns: repeat(${columns}, 1fr);
    `}
  >
    {children}
  </div>
);
