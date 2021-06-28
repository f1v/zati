import React from 'react';
import { Box } from '../Box/Box';
import { Button, ButtonProps } from '../Button/Button';
import { Icon, IIconProps } from '../Icon/Icon';

type Props = ButtonProps & {
  icon: () => JSX.Element;
  iconProps?: Partial<IIconProps>;
};

export const IconButton: React.FC<Props> = ({
  children,
  icon,
  iconProps,
  ...props
}) => {
  return React.Children.count(children) ? (
    <Button {...props}>
      <Box
        alignItems="center"
        grid
        gridGap="var(--spacer-s)"
        gridTemplateColumns="0fr 1fr"
      >
        <Icon icon={icon} {...iconProps} />
        {children}
      </Box>
    </Button>
  ) : (
    <Button compact {...props}>
      <Icon icon={icon} {...iconProps} />
    </Button>
  );
};
