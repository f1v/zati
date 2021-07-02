import classNames from 'classnames';
import * as React from 'react';
import { Base } from './ButtonStyle';

export enum ButtonColor {
  ERROR = 'error',
  LINK = 'link',
  NONE = 'none',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  TRANSPARENT = 'transparent',
  WARNING = 'warning'
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

export const Button: React.FC<Props> = ({
  children,
  className,
  color = ButtonColor.PRIMARY,
  compact,
  disabled,
  inline = true,
  onClick,
  outline,
  rounded = true,
  type
}) => (
  <Base
    className={classNames(
      'btn',
      color,
      {
        block: !inline,
        compact,
        disabled,
        inline,
        outline,
        rounded
      },
      className
    )}
    disabled={disabled}
    onClick={onClick}
    role="button"
    tabIndex={0}
    type={type}
  >
    {children}
  </Base>
);

export type ButtonProps = Props;
