import classNames from 'classnames';
import React from 'react';
import { Box } from '../Box/Box';
import { Base } from './Base';

export enum ButtonColor {
  ERROR = 'error',
  LINK = 'link',
  NONE = 'none',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  TRANSPARENT = 'transparent',
  WARNING = 'warning',
}

type Props = {
  // Text alignment within the button
  align?: string;
  // Class for the button
  className?: string;
  // The color to use
  color?: ButtonColor;
  // If true, a smaller buttons will be used
  compact?: boolean;
  // If true, the button will be disabled
  disabled?: boolean;
  // Type of hover effect
  hoverEffect?: 'outline' | 'fadeDark' | 'fadeLight';
  // If false, the button will be full width
  inline?: boolean;
  leftIcon?: React.ElementType;
  // If true, the button will have a transparent background and a border
  outline?: boolean;
  // If true, the button will have rounded corners
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  // If true, the button will have rounded corners
  rounded?: boolean;
  // Passed to button
  type?: 'button' | 'submit';

  // Callback for onClick
  onClick(e?: React.MouseEvent): void;
};

export class Button extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    color: ButtonColor.PRIMARY,
    hoverEffect: 'outline',
    rounded: true,
  };

  getClassName(): string {
    const {
      align,
      className,
      color,
      compact,
      disabled,
      hoverEffect,
      inline,
      outline,
      rounded,
    } = this.props;

    return classNames(
      'btn',
      color,
      {
        block: !inline,
        compact,
        disabled,
        inline,
        outline,
        rounded,
      },
      className
    );
  }

  render(): React.ReactNode {
    const { children, disabled, leftIcon, onClick, type } = this.props;

    const className: string = this.getClassName();

    return (
      <Base
        onClick={onClick}
        className={className}
        disabled={disabled}
        tabIndex={0}
        type={type}
      >
        <Box
          alignItems="center"
          grid
          gridGap="10px"
          gridTemplateColumns="0fr 1fr"
        >
          {leftIcon}
          {children}
        </Box>
      </Base>
    );
  }
}

export type ButtonProps = Props;
