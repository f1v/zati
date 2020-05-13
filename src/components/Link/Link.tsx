import classNames from 'classnames';
import React from 'react';
import { default as RouterLink } from 'redux-first-router-link';
import { Text } from 'zati';
import styles from './Link.scss'; // tslint:disable-line

interface ILinkProps {
  className?: string;
  color?: string;
  lines?: number;
  to?: string | Object;
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
        {this.props.to ? (
          <RouterLink to={this.props.to} className={className} style={style}>
            {children}
          </RouterLink>
        ) : (
          <span
            className={className}
            onClick={onClick}
            role="button"
            style={style}
          >
            {children}
          </span>
        )}
      </Text>
    );
  }
}

export { Link };
