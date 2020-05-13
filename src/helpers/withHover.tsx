import React from 'react';

interface IWithHoverState {
  hovering: boolean;
}

export const withHover: any = <P extends {}>(
  Component: React.ComponentType<P>
): React.ComponentType<P> =>
  class WithHover extends React.Component<P> {
    state: IWithHoverState = {
      hovering: false,
    };

    render(): React.ReactElement {
      return Component ? (
        <Component
          hasHover={this.state.hovering}
          onMouseOut={(): void => this.setState({ hovering: false })}
          onMouseOver={(): void => this.setState({ hovering: true })}
          {...this.props}
        />
      ) : (
        <div>none</div>
      );
    }
  };
