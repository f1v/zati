import _ from 'lodash';
import React from 'react';

import { theme } from '../../themes'; // tslint:disable-line no-relative-imports
import { Box } from '../Box/Box'; // tslint:disable-line no-relative-imports
import { ButtonColor } from '../Button/Button'; // tslint:disable-line no-relative-imports
import { IconButton } from '../Button/IconButton'; // tslint:disable-line no-relative-imports

type IconBarItem = {
  icon: React.ReactNode;
  size?: number;
  onClick(): void;
};

interface IIconBarProps {
  color?: ButtonColor;
  direction?: 'horizontal' | 'vertical';
  gap?: string;
  icons?: (IconBarItem | React.ReactNode)[];
  size?: number;
}

/**
 * An icon item for the IconBar
 */
// export class IconBarItem extends React.Component<IIconBarProps> {
//   render(): React.ReactNode {
//     return 'icon';
//   }
// }

/**
 * A horizontal or vertical bar of icons
 */
export class IconBar extends React.Component<IIconBarProps> {
  render(): React.ReactElement {
    const {
      color = ButtonColor.NONE,
      icons,
      gap = theme.spacers.s,
      size = 16,
    } = this.props;

    return (
      <Box
        alignItems="center"
        grid
        gridGap={gap}
        gridTemplateColumns={`repeat(${icons.length}, 1fr)`}
      >
        {_.map(icons, (icon: IconBarItem, i: number) => {
          let item: React.ReactElement;
          if (_.isString(icon.icon)) {
            item = (
              <IconButton
                color={color}
                icon={icon.icon}
                iconProps={{ size: icon.size || size }}
                key={icon.icon}
                onClick={icon.onClick}
              />
            );
          } else if (React.isValidElement(icon.icon)) {
            item = React.cloneElement(icon.icon, { key: `custom-icon-${i}` });
          }

          return item;
        })}
      </Box>
    );
  }
}
