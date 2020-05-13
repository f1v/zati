import classNames from 'classnames';
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
      compact,
      disabled,
      innerRef,
      name,
      onChange,
      placeholder,
      type,
      value,
    } = this.props;
    const className: string = classNames(styles.input, {
      [styles.compact]: compact,
    });

    return (
      <input
        autoFocus={autoFocus}
        className={className}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={innerRef}
        type={type}
        value={value}
      />
    );
  }
}

export { Input };
