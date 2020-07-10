import classnames from 'classnames';
import React from 'react';
import { BaseInput, IBaseInputProps } from '../../';

import styles from './Input.scss'; // tslint:disable-line

/**
 * Input class
 */
class Input extends BaseInput<IBaseInputProps<HTMLInputElement>> {
  render(): React.ReactNode {
    const {
      autoFocus,
      className,
      compact,
      disabled,
      innerRef,
      name,
      onChange,
      placeholder,
      type,
      value,
      ...restProps
    } = this.props;
    const classNames: string = classnames(
      styles.input,
      {
        [styles.compact]: compact,
      },
      className
    );

    return (
      <input
        autoFocus={autoFocus}
        className={classNames}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={innerRef}
        type={type}
        value={value}
        {...restProps}
      />
    );
  }
}

export { Input };
