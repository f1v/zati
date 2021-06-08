import React from 'react';
import { Box } from '../Box/Box'; // tslint:disable-line no-relative-imports
import { Button, ButtonColor, IButtonProps } from '../Button/Button'; // tslint:disable-line no-relative-imports
import { Icon, IIconProps } from '../Icon/Icon'; // tslint:disable-line no-relative-imports

import { theme } from '../../themes'; // tslint:disable-line no-relative-imports

// import styles from './Button.scss'; // tslint:disable-line no-relative-imports

interface IIconButtonProps {
  buttonProps?: Partial<IButtonProps>;
  color?: ButtonColor;
  icon: string; // TODO Use the IconMap from Icon
  iconProps?: Partial<IIconProps>;
  onClick(e?: React.MouseEvent): void;
}

/**
 * Button with an icon
 */
export class IconButton extends React.Component<IIconButtonProps> {
  render(): React.ReactElement {
    const {
      buttonProps,
      children,
      color,
      icon,
      iconProps,
      onClick,
    } = this.props;

    return (
      <Button
        // className={styles.iconBtn}
        color={color}
        onClick={onClick}
        {...buttonProps}
      >
        {React.Children.count(children) ? (
          <Box
            alignItems="center"
            grid
            gridGap={theme.spacers.xs}
            gridTemplateColumns="0fr 1fr"
          >
            <Icon icon={icon} {...iconProps} />
            {children}
          </Box>
        ) : (
          <Icon
            icon={icon}
            color={'var(--zati-color-grey-light)'}
            {...iconProps}
          />
        )}
      </Button>
    );
  }
}
