import React from 'react';
import { IconType } from 'react-icons';

export interface ISvgProps {
  color?: string;
  size?: number;
}

export interface IIconProps extends ISvgProps {
  className?: string;
  icon: IconType;
  onClick?(): void;
}

/**
 * A wrapper for an icon library
 */
export class Icon extends React.Component<IIconProps> {
  render(): React.ReactNode {
    const { color, icon, onClick, size } = this.props;
    const Component = icon;

    return onClick ? (
      <button
        onClick={onClick}
        role="button"
        style={{ all: 'unset', cursor: 'pointer' }}
      >
        <Component color={color} size={size} />
      </button>
    ) : (
      <Component color={color} size={size} />
    );
  }
}
