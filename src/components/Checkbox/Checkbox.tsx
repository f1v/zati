import React from 'react';
import { IoCheckmark as Checkmark } from 'react-icons/io5';

import {
  CheckboxStyled as Component,
  CheckboxStyleProps,
} from './CheckboxStyled'; // tslint:disable-line

type Props = CheckboxStyleProps & {
  className?: string;
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
  value,
}) => {
  const checkSize: number = compact ? 10 : 14;

  return (
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
        value={value || ''}
      />
    </Component>
  );
};
