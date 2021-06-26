import _ from 'lodash';
import React from 'react';
import { Box } from '../Box/Box';

interface ITabsProps {
  hideOnMount?: boolean;
  hideOnToggle?: boolean;
}

interface ITabsState {
  openTabIdx: number;
  onChange?(): void;
}

interface ITabProps {
  toggle?: React.ReactElement;
  onClick?(): void;
  onHide?(): void;
}

export interface ITabToggleProps {
  active?: boolean;
}

/**
 * Tab component to be used as a child of Tabs
 */
export class Tab extends React.Component<ITabProps> {
  render(): React.ReactNode {
    return this.props.children || null; // tslint:disable-line no-null-keyword
  }
}

/**
 * Tab toggle component to be used as a child of Tabs
 */
export class TabToggle<P extends ITabToggleProps> extends React.Component<P> {
  render(): React.ReactNode {
    return 'test';
  }
}

/**
 * A React Tabs component
 */
export class Tabs extends React.Component<ITabsProps, ITabsState> {
  constructor(props: ITabsProps) {
    super(props);

    this.state = {
      onChange: _.noop,
      openTabIdx: props.hideOnMount ? -1 : 0,
    };
  }

  getOpenTab(): React.ReactNode {
    const { openTabIdx } = this.state;

    return openTabIdx > -1 ? this.props.children[openTabIdx] : null; // tslint:disable-line no-null-keyword
  }

  setOpenTab(tabId: number, onTabHide: () => void): void {
    this.state.onChange();
    this.setState(({ openTabIdx }: ITabsState) => ({
      onChange: onTabHide || _.noop,
      openTabIdx: this.props.hideOnToggle && openTabIdx === tabId ? -1 : tabId,
    }));
  }

  render(): React.ReactNode {
    return (
      <>
        <Box
          grid
          gridTemplateColumns={`repeat(${React.Children.count(
            this.props.children
          )}, 1fr)`}
        >
          {React.Children.map(
            this.props.children,
            (TabInstance: Tab, idx: number) => {
              const {
                onClick,
                onHide,
                toggle: ToggleElement,
              } = TabInstance.props;
              const onToggleClick: () => void = onClick
                ? (): void => {
                    this.setOpenTab(-1, onHide);
                    onClick();
                  }
                : (): void => this.setOpenTab(idx, onHide);

              return (
                <div key={idx} onClick={onToggleClick} role="button">
                  {React.isValidElement(ToggleElement)
                    ? React.cloneElement<ITabToggleProps>(ToggleElement, {
                        active: idx === this.state.openTabIdx,
                      })
                    : ToggleElement}
                </div>
              );
            }
          )}
        </Box>
        {this.getOpenTab()}
      </>
    );
  }
}
