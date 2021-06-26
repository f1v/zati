import classNames from 'classnames';
import React from 'react';

import { BaseInput, IBaseInputProps } from '../Field/BaseInput';

import styles from '../Input/Input.scss'; // tslint:disable-line

/**
 * Textarea class
 */
export class Textarea extends BaseInput<IBaseInputProps<HTMLTextAreaElement>> {
  render(): React.ReactNode {
    const {
      autoFocus,
      compact,
      disabled,
      innerRef,
      name,
      onChange,
      placeholder,
      value,
    } = this.props;

    const className: string = classNames(styles.textarea, {
      [styles.compact]: compact,
    });

    return (
      <textarea
        autoFocus={autoFocus}
        className={className}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={innerRef}
        value={value}
      />
    );
  }
}
