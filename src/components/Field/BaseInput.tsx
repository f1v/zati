import React from 'react';

export interface IBaseInputProps<T> {
  autoFocus?: boolean;
  compact?: boolean;
  disabled?: boolean;
  innerRef?: React.Ref<T>;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?(e: React.ChangeEvent<T>): void;
}

/**
 * BaseInput class
 */
export class BaseInput<T> extends React.Component<T> {
  constructor(props: T) {
    super(props);
    if (this.constructor === BaseInput) {
      throw new TypeError(
        'Abstract class "BaseInput" cannot be instantiated directly.'
      );
    }
  }
}
