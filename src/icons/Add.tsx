import React from 'react';
import { ISvgProps } from '../';

/* tslint:disable:max-line-length */

/**
 * Add sign icon
 */
export class IconAdd extends React.Component<ISvgProps> {
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
          d="M18.5 10h-8.5v-8.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v8.5h-8.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8.5v8.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.5h8.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
          fill={color}
        />
      </svg>
    );
  }
}
