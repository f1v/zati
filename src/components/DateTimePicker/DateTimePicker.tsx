import classNames from 'classnames';
import moment from 'moment';
import React from 'react';

import TextField from '@material-ui/core/TextField';

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
    defaultDate: moment().format('YYYY-MM-DDTHH:mm'),
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

    return (
      <TextField
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        fullWidth={fullWidth}
        name={name}
        id={id}
        label={label}
        type="datetime-local"
        className={classNames(styles.datetime, className)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }
}
