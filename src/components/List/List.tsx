// import classNames from 'classnames';
import React from 'react';

import styles from './List.scss'; // tslint:disable-line

// const ListItem: any = {};

interface IListProps {
  items: React.ReactNode;
}

/**
 * A group of items
 */
class List extends React.Component<IListProps> {
  render(): React.ReactNode {
    const { items } = this.props;

    return <div className={styles.list}>{items}</div>;
  }
}

// interface IListItemProps {}

/**
 * A single item for a list
 */
class ListItem extends React.Component {
  render(): React.ReactNode {
    const { children } = this.props;

    return <div className={styles.listItem}>{children}</div>;
  }
}

export { List, ListItem };
