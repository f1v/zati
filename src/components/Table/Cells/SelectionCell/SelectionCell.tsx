import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';
import { Checkbox } from '../../../../';

import styles from '../../Table.scss'; // tslint:disable-line

type SelectionCellValueType = { id: string };
type SelectionType = 'checkbox' | 'radio';

interface ISelectionCellProps<T extends SelectionCellValueType> {
  isSelected: boolean;
  isHeader?: boolean;
  type?: SelectionType;
  value?: T;

  onSelect?(item?: T): T | undefined | void;
}

interface ISelectionCellDefaultProps {
  isHeader: boolean;
  isSelected: boolean;
  type: SelectionType;
  value: {};
}

/**
 * A table cell with a selection box
 */
export class SelectionCell<
  T extends SelectionCellValueType
> extends React.Component<ISelectionCellProps<T>> {
  static defaultProps: ISelectionCellDefaultProps = {
    isHeader: false,
    isSelected: false,
    type: 'checkbox',
    value: {},
  };

  render(): React.ReactNode {
    const { isHeader, isSelected, value } = this.props;
    const className: string = classNames(isHeader ? styles.th : styles.td);

    return (
      <div className={className}>
        <Checkbox
          checked={isSelected}
          onChange={this.onSelect}
          value={value.id}
        />
      </div>
    );
  }

  onSelect = (): T | void | undefined => {
    if (!_.isEmpty(this.props.value)) {
      return this.props.onSelect(this.props.value);
    }
  };
}
