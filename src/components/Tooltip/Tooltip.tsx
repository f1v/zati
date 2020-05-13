import classNames from 'classnames';
import React from 'react';
import {
  Manager,
  Popper,
  Reference,
  ReferenceChildrenProps,
} from 'react-popper';

import styles from './Tooltip.scss'; // tslint:disable-line

/* tslint:disable */

interface ITooltipProps {
  isOpen?: boolean;
  placement?: string;
  title?: string;
}

interface ITooltipState {
  isOpen?: boolean;
}

/**
 * A tooltip element
 */
export class Tooltip extends React.Component<ITooltipProps, ITooltipState> {
  constructor(props: ITooltipProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  close = (): void => {
    this.setState({ isOpen: false });
  };

  open = (): void => {
    this.setState({ isOpen: true });
  };

  render(): React.ReactNode {
    const { children, title } = this.props;

    return (
      <Manager>
        <Reference>
          {(refChildren: ReferenceChildrenProps): React.ReactNode => {
            return (
              <div
                ref={refChildren.ref}
                onMouseEnter={this.open}
                onMouseLeave={this.close}
              >
                {children}
              </div>
            );
          }}
        </Reference>
        {this.state.isOpen && (
          <Popper>
            {(children: any): React.ReactNode => {
              const { ref, style, placement, arrowProps } = children;

              return (
                <div
                  className={classNames(
                    styles.tooltip,
                    styles[`${placement}Tooltip`],
                  )}
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  {title}
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              );
            }}
          </Popper>
        )}
      </Manager>
    );
  }
}
