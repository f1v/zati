import styled, { StyledComponent } from '@emotion/styled';
import classNames from 'classnames';
import _ from 'lodash';
import * as React from 'react';
import {
  alignItems,
  AlignItemsProps,
  background,
  BackgroundProps,
  display,
  DisplayProps,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  gridGap,
  GridGapProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  margin,
  MarginProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minWidth,
  MinWidthProps,
  padding,
  PaddingProps,
  width,
  WidthProps
} from 'styled-system';

import { BoxStyled } from './BoxStyled';

interface IBoxProps extends React.HTMLProps<HTMLElement> {
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  className?: string;
  color?: string;
  grid?: boolean;
  inline?: boolean;
  style?: any;
  textAlign?: 'center' | 'left' | 'right';

  onMouseOut?(): void;
  onMouseOver?(): void;
}

/**
 * Layout class
 */
class BaseBox extends React.Component<IBoxProps> {
  getItemStyle(): React.CSSProperties {
    const {
      bgColor,
      border,
      borderRadius,
      color,
      style,
      textAlign
    } = this.props;

    return {
      backgroundColor: bgColor,
      border,
      borderRadius,
      color,
      textAlign,
      ...style
    };
  }

  render(): React.ReactNode {
    const { className, onMouseOut, onMouseOver } = this.props;
    const classList: string = classNames(className);

    const role: string = onMouseOver || onMouseOut ? 'role' : undefined;

    return (
      <BoxStyled
        className={classList}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        role={role}
        style={this.getItemStyle()}
      >
        {this.props.children}
      </BoxStyled>
    );
  }
}

interface IStyledProps
  extends AlignItemsProps,
    BackgroundProps,
    DisplayProps,
    FlexProps,
    FlexDirectionProps,
    GridGapProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    HeightProps,
    JustifyContentProps,
    MarginProps,
    MaxHeightProps,
    MaxWidthProps,
    MinWidthProps,
    PaddingProps,
    WidthProps {}

const Box: StyledComponent<any, IStyledProps, any> = styled(BaseBox)`
  ${alignItems}
  ${background}
  ${display}
  ${flex}
  ${flexDirection}
  ${gridGap}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${height}
  ${justifyContent}
  ${margin}
  ${maxHeight}
  ${maxWidth}
  ${minWidth}
  ${padding}
  ${width}
`;

export { Box };
