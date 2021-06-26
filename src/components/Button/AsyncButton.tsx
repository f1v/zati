import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { BiLoaderAlt as SpinnerIcon } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';
import { Button } from './Button';
import { IconButton, IconButtonProps } from './IconButton';

type Props = Omit<IconButtonProps, 'icon' | 'onClick'> & {
  icon?: IconType;
  isLoading?: boolean;
  loadingText?: React.ReactNode;
  onClick?(e?: React.SyntheticEvent): Promise<any> | void;
};

const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const SpinningIcon = styled(SpinnerIcon)`
  animation: ${spinAnimation} 1.5s linear infinite;
  -webkit-animation: ${spinAnimation} 1.5s linear infinite;
`;

export const AsyncButton: React.FC<Props> = ({
  children,
  disabled,
  icon,
  isLoading,
  loadingText,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState(isLoading);
  const Component = icon || loading ? IconButton : Button;

  return (
    <Component
      children={loading && loadingText ? loadingText : children}
      disabled={disabled || loading}
      onClick={async e => {
        setLoading(true);
        await onClick(e);
        setLoading(false);
      }}
      {...(loading ? { icon: SpinningIcon } : icon ? { icon } : {})}
      {...props}
    />
  );
};
