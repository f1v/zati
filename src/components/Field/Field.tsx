import React, { ChangeEvent, ReactNode } from 'react';
import { Checkbox, DateTimePicker, Input, Textarea } from 'zati';

interface IFieldProps {
  autoFocus?: boolean;
  compact?: boolean;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?(value: string, field: string, e: React.ChangeEvent): void;
}

/**
 * Field class
 */
export class Field extends React.Component<IFieldProps> {
  getFieldComponent(): React.ReactElement {
    switch (this.props.type) {
      case 'checkbox':
        return <Checkbox />;
      case 'datetime':
        return <DateTimePicker />;
      case 'textarea':
        return <Textarea />;
      default:
        return <Input />;
    }
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    this.props.onChange(value, name, e);
  };

  render(): ReactNode {
    const { onChange } = this;

    return React.cloneElement(this.getFieldComponent(), {
      ...this.props,
      onChange,
    });
  }
}
