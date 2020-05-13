import classNames from 'classnames';
import React from 'react';
import { Text } from '../../';
import styles from './Link.scss'; // tslint:disable-line

interface ILinkProps {
  className?: string;
  color?: string;
  lines?: number;
  underline?: boolean;

  onClick?(): void;
}

/**
 * A group of items
 */
class Link extends React.Component<ILinkProps> {
  render(): React.ReactNode {
    const { children, color, lines, onClick } = this.props;

    const className: string = classNames(this.props.className, styles.link, {
      [styles.underline]: this.props.underline,
    });

    const style: React.CSSProperties = {
      color,
    };

    return (
      <Text lines={lines}>
        <span
          className={className}
          onClick={onClick}
          role="button"
          style={style}
        >
          {children}
        </span>
      </Text>
    );
  }
}

export { Link };
