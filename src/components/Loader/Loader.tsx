import React from 'react';

import styles from './Loader.scss'; // tslint:disable-line

interface ILoaderProps {
  color?: string;
  size?: string;
}

/**
 * Loading indicator
 */
export const Loader: React.FC<ILoaderProps> = ({
  color,
  size,
}: ILoaderProps): React.ReactElement => (
  <div className={styles.loader}>
    <style>
      {`
        .${styles.loader} div {
          --dot-color: ${color || 'var(--zati-color-grey-light)'};
          --dot-size: ${size || '8px'};
        }
      `}
    </style>
    <div />
    <div />
    <div />
    <div />
  </div>
);
