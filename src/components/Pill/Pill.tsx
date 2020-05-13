import classNames from 'classnames';
import React from 'react';
import { Text } from '../../';
import styles from './Pill.scss'; // tslint:disable-line

interface IPillProps {
  className?: string;
  color?: string;
}

/**
 * A group of items
 */
class Pill extends React.Component<IPillProps> {
  render(): React.ReactNode {
    const { children, className } = this.props;

    const classList: string = classNames(styles.pill, className);

    return (
      <Text className={classList} type="caption">
        {children}
      </Text>
    );
  }
}

export { Pill };
