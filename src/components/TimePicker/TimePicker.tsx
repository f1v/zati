import classNames from 'classnames';
import React from 'react';

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
    defaultTime: '00:00', // FIXME - Default to now
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

    if (fullWidth) {
      console.info(`fullWidth is not implemented`);
    }

    return (
      <>
        {label}
        <br />
        <input
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          id={id}
          type="time"
          defaultValue={defaultTime}
          className={classNames(styles.time, className)}
        />
      </>
    );
  }
}
