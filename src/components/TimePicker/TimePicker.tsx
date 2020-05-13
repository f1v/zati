import classNames from 'classnames';
import moment from 'moment';
import React from 'react';

import TextField from '@material-ui/core/TextField';

import styles from './TimePicker.scss'; // tslint:disable-line

export interface ITtimePickerProps {
  defaultTime?: string;
  label?: string;
  className?: string;
  value?: string | number;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  onChange?(): void;
}

export interface ITimePickerDefaultProps {
  defaultTime: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * A timePicker
 */
export class TimePicker extends React.Component<ITtimePickerProps> {
  static defaultProps: ITimePickerDefaultProps = {
    defaultTime: moment().format('HH:mm'),
    id: 'time',
    required: false,
    disabled: false,
    fullWidth: false,
  };

  render(): React.ReactNode {
    const {
      defaultTime,
      label,
      className,
      value,
      required,
      disabled,
      onChange,
      fullWidth,
      id,
    } = this.props;

    return (
      <>
        <TextField
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          fullWidth={fullWidth}
          id={id}
          label={label}
          type="time"
          defaultValue={defaultTime}
          className={classNames(styles.time, className)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </>
    );
  }
}
