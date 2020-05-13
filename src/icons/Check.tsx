import React from 'react';
import { ISvgProps } from '../';

/* tslint:disable:max-line-length */

/**
 * Check symbol icon
 */
export class IconCheck extends React.Component<ISvgProps> {
  render(): React.ReactNode {
    const { color, size = 20 } = this.props;

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
      >
        <path
          d="M5.5 17.5c-0.128 0-0.256-0.049-0.354-0.146l-5-5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4.646 4.646 13.646-13.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-14 14c-0.098 0.098-0.226 0.146-0.354 0.146z"
          fill={color}
        />
      </svg>
    );
  }
}
