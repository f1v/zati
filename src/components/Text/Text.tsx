import styled, { StyledComponent } from '@emotion/styled';
import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';
import { IconType } from 'react-icons';
import {
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps
} from 'styled-system';
import { Icon } from '../Icon/Icon';

import styles from './Text.scss'; // tslint:disable-line

export enum TextTheme {
  ERROR = 'error',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning'
}

interface ITextProps {
  align?: 'center' | 'left' | 'right';
  block?: boolean;
  className?: string;
  color?: string;
  icon?: IconType;
  iconAfter?: boolean;
  iconColor?: string;
  lineHeight?: 'compact' | 'regular' | 'wide';
  lines?: number;
  strong?: boolean;
  type?: 'h1' | 'h2' | 'h3' | 'inherit' | 'lead' | 'normal' | 'caption';
}

/**
 * Text display
 */
class BaseText extends React.Component<ITextProps> {
  renderIcon(): React.ReactNode {
    return <Icon color={this.props.iconColor} icon={this.props.icon} />;
  }

  render(): React.ReactNode {
    const {
      align,
      block,
      children,
      className,
      color,
      icon,
      iconAfter,
      lines,
      strong,
      type
    } = this.props;

    const classList: string = classNames(className, {
      [styles.breakWord]: true,
      [styles.clamp]: lines === 2, // @TODO: (?) Change if we ever need to clamp at more than 2 lines.
      [styles.hasIcon]: icon,
      [`text${_.upperFirst(align)}`]: align,
      [styles.strong]: strong,
      [styles[type]]: type,
      [styles.truncate]: lines === 1,
      [styles.inherit]: !type,
      [styles.block]: block
    });

    return (
      <div className={classList} style={{ color }}>
        {icon && !iconAfter && this.renderIcon()}
        {children}
        {icon && iconAfter && this.renderIcon()}
      </div>
    );
  }
}

interface IStyledProps extends LineHeightProps, TextAlignProps {}

const Text: StyledComponent<ITextProps, IStyledProps, {}> = styled(BaseText)`
  ${textAlign}
  ${lineHeight}
`;

export { Text };
