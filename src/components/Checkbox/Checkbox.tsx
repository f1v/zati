import React from 'react';
import { IoCheckmark as Checkmark } from 'react-icons/io5';

import { CheckboxStyled as Component } from './CheckboxStyled'; // tslint:disable-line

type Props = {
  className?: string;
  checked?: boolean;
  compact?: boolean;
  colorScheme?: string;
  disabled?: boolean;
  onChange?(e: React.MouseEvent): void;
  value?: string;
};

export const Checkbox: React.FC<Props> = ({
  checked,
  className,
  colorScheme,
  compact,
  disabled,
  onChange,
  value = '',
}) => (
  <Component
    className={className}
    checked={checked}
    colorScheme={colorScheme}
    compact={compact}
    onClick={onChange}
    role="button"
  >
    {checked && <Checkmark />}
    <input
      aria-checked={checked}
      checked={checked}
      disabled={disabled}
      readOnly
      type="checkbox"
      value={value}
    />
  </Component>
);

export type CheckboxProps = Props;
