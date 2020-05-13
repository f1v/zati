import classNames from 'classnames';
import React, { CSSProperties } from 'react';

import styles from './Card.scss'; // tslint:disable-line

export enum CardTheme {
  DANGER = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface ICardProps {
  bordered?: boolean;
  isPadded?: boolean;
  color?: CardTheme;
  style?: CSSProperties;
  title?: React.ReactNode;
}

/**
 * A card component
 */
export class Card extends React.Component<ICardProps> {
  static defaultProps: ICardProps = {
    isPadded: true,
  };

  render(): React.ReactNode {
    const className: string = classNames(
      styles.card,
      styles[this.props.color],
      {
        [styles.bordered]: this.props.bordered,
        [styles.padded]: this.props.isPadded,
      }
    );

    return (
      <div className={className} style={this.props.style}>
        {this.props.title && (
          <div className={styles.title}>{this.props.title}</div>
        )}
        <div className={styles.body}>{this.props.children}</div>
      </div>
    );
  }
}
