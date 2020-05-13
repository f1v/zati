import classNames from 'classnames';
import React from 'react';
import { Icon } from '../Icon/Icon';

import styles from './Checkbox.scss'; // tslint:disable-line

interface ICheckboxProps {
  checked?: boolean;
  compact?: boolean;
  value?: string;

  onChange?(e: React.MouseEvent): void;
}

/**
 * A checkbox component
 */
export class Checkbox extends React.Component<ICheckboxProps> {
  render(): React.ReactNode {
    const { checked, compact, onChange, value } = this.props;
    const className: string = classNames(styles.checkbox, {
      [styles.checked]: checked,
      [styles.compact]: compact,
    });
    const checkSize: number = compact ? 10 : 14;

    return (
      <div className={className} onClick={onChange} role="button">
        {checked && <Icon color="#14c2e7" icon="check" size={checkSize} />}
        <input
          aria-checked={checked}
          checked={checked}
          placeholder="sd"
          readOnly
          type="checkbox"
          value={value || ''}
        />
      </div>
    );
  }
}
