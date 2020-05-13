import classNames from 'classnames';
import React from 'react';

import styles from './DateTimePicker.scss'; // tslint:disable-line

export interface IDateTimePickerProps {
  className?: string;
  defaultDate?: string | number;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  label?: string;
  name?: string;
  required?: boolean;
  value?: string | number;
  onChange?(e: React.FormEvent): void;
}

export interface IDateTimePickerDefaultProps {
  defaultDate: any;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
}

/**
 * A DateTimePicker
 */
export class DateTimePicker extends React.Component<IDateTimePickerProps> {
  static defaultProps: IDateTimePickerDefaultProps = {
    defaultDate: `${new Date().getFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDate()} 00:00`,
    disabled: false,
    id: 'dateTime',
    fullWidth: false,
    name: 'dateTime',
    required: false,
  };

  render(): React.ReactNode {
    const {
      label,
      className,
      value,
      required,
      disabled,
      onChange,
      fullWidth,
      id,
      name,
    } = this.props;

    if (fullWidth) {
      console.info(`fullWidth is not implemented`);
    }

    return (
      <>
        {label}
        <input
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          name={name}
          id={id}
          type="datetime-local"
          className={classNames(styles.datetime, className)}
        />
      </>
    );
  }
}
