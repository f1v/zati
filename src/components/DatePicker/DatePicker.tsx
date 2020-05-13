import classNames from 'classnames';
import React from 'react';

import styles from './DatePicker.scss'; // tslint:disable-line

export interface IDatePickerProps {
  defaultDate?: string | number;
  label?: string;
  className?: string;
  value?: string | number;
  required?: boolean;
  disabled?: boolean;
  onChange?: any;
  fullWidth?: boolean;
  id?: string;
  name?: string;
}

export interface IDatePickerDefaultProps {
  defaultDate: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  name?: string;
}

/**
 * A datepicker
 */
export class DatePicker extends React.Component<IDatePickerProps> {
  static defaultProps: IDatePickerDefaultProps = {
    defaultDate: `${new Date().getFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDate()}`,
    id: 'date',
    name: 'date',
    required: false,
    disabled: false,
    fullWidth: false,
  };

  render(): React.ReactNode {
    const {
      defaultDate,
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
          id={id}
          name={name}
          type="date"
          defaultValue={defaultDate}
          className={classNames(styles.date, className)}
        />
      </>
    );
  }
}
