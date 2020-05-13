import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';
import { NavLink } from 'redux-first-router-link';

import styles from './Button.scss'; // tslint:disable-line no-relative-imports

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

export interface IButtonProps {
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
  rounded?: boolean;
  // The route to redirect to when the button is clicked. If defined, an a element will be used
  to?: Object;
  type?: 'button' | 'submit';

  // Callback for onClick
  onClick(e?: React.MouseEvent): void;
}

/**
 * A group of items
 */
class Button extends React.Component<IButtonProps> {
  static defaultProps: Partial<IButtonProps> = {
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
      styles.btn,
      styles[color],
      {
        [styles.block]: !inline,
        [styles.compact]: compact,
        [styles.disabled]: disabled,
        [styles.inline]: inline,
        [styles.outline]: outline,
        [styles.rounded]: rounded,
        [styles[`align-${align}`]]: align === 'right' || align === 'left',
        [styles[`hover${_.upperFirst(hoverEffect)}`]]:
          hoverEffect === 'fadeDark' || hoverEffect === 'fadeLight',
      },
      className
    );
  }

  render(): React.ReactNode {
    const { children, disabled, onClick, to, type } = this.props;

    const className: string = this.getClassName();

    return to ? (
      <NavLink className={className} to={to}>
        {children}
      </NavLink>
    ) : (
      <button
        onClick={onClick}
        className={className}
        disabled={disabled}
        tabIndex={0}
        type={type}
      >
        {children}
      </button>
    );
  }
}

export { Button };
