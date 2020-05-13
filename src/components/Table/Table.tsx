import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';
import { Box, Loader, SelectionCell, Text } from '../../';

import styles from './Table.scss'; // tslint:disable-line

type TableDataType = { id: string };

export interface ITableColumn {
  key: string;
  // Optional title to be displayed
  title?: string;
  width?: number | string;

  render?(val: any, data?: any): React.ReactNode;
}

export interface ITableRow<T extends TableDataType> {
  id: string;
  data: T;
  selected?: boolean;
}

interface ITableProps<T extends TableDataType> {
  cols: ITableColumn[];
  columnTemplate?: string;
  hasHeader?: boolean;
  isLoading?: boolean;
  rows: ITableRow<T>[];
  wide?: boolean;

  onSelect?(item: T): void;
  onSelectAll?(): void;
}

interface IDefaultTableProps {
  hasHeader: boolean;
}

/**
 * Table class
 */
class Table<T extends TableDataType> extends React.Component<ITableProps<T>> {
  static defaultProps: IDefaultTableProps = {
    hasHeader: false,
  };

  render(): React.ReactNode {
    const { isLoading } = this.props;

    return (
      <div
        className={styles.table}
        style={{ gridTemplateColumns: this.getColumnTemplate() }}
      >
        {this.renderHead()}
        {isLoading ? (
          <Box
            alignItems="center"
            display="flex"
            height="300px"
            justifyContent="center"
            style={{ gridColumn: `1/${this.getColumnTotal() + 1}` }}
          >
            <Loader />
          </Box>
        ) : (
          this.renderBody()
        )}
      </div>
    );
  }

  // @TODO Enable setting width per column
  private getColumnTemplate(): string {
    let columnTemplate: string;
    if (this.isSelectionEnabled()) {
      columnTemplate = `70px ${this.props.columnTemplate ||
        `repeat(${this.getColumnTotal() - 1}, 1fr)`}`;
    } else {
      columnTemplate =
        this.props.columnTemplate || `repeat(${this.getColumnTotal()}, 1fr)`;
    }

    return columnTemplate;
  }

  private getColumnTotal(): number {
    let totalColumns: number = this.props.cols.length;

    if (this.isSelectionEnabled()) {
      totalColumns++;
    }

    return totalColumns;
  }

  private isSelectionEnabled(): boolean {
    return !_.isUndefined(this.props.onSelect);
  }

  private renderHead(): React.ReactNode {
    const { cols, onSelect, onSelectAll, rows } = this.props;

    const columns: React.ReactNodeArray = cols.map((col: ITableColumn) => (
      <div className={styles.th} key={col.key}>
        {col.title && <Text>{col.title}</Text>}
      </div>
    ));

    if (!_.isUndefined(onSelect)) {
      columns.unshift(
        _.isUndefined(onSelectAll) ? (
          <div className={styles.th} key="no-select" />
        ) : (
          <SelectionCell
            isHeader
            onSelect={onSelectAll}
            key="select"
            isSelected={_.every(rows, 'selected')}
          />
        )
      );
    }

    return columns;
  }

  private renderBody(): React.ReactNode {
    const { cols, onSelect, rows } = this.props;
    const cellClassName: string = classNames(styles.td, {
      [styles.wide]: this.props.wide,
    });

    return rows.map((row: ITableRow<T>) => {
      const columns: React.ReactNodeArray = cols.map(
        (col: ITableColumn, i: number) => (
          <div
            className={cellClassName}
            data-row={row.id}
            key={`${col.title}-${i}`}
          >
            {col.render ? (
              col.render(row.data[col.key], row.data)
            ) : (
              <Text>{row.data[col.key]}</Text>
            )}
          </div>
        )
      );

      if (!_.isUndefined(onSelect)) {
        columns.unshift(
          <SelectionCell
            isSelected={row.selected}
            key="select"
            onSelect={onSelect}
            value={row.data}
          />
        );
      }

      return columns;
    });
  }
}

export { Table };
