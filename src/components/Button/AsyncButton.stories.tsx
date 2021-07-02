import React, { useState } from 'react';
import { GoCheck as CheckIcon } from 'react-icons/go';
import { Box } from '../Box/Box';
import { AsyncButton } from './AsyncButton';
import { ButtonColor } from './Button';

export const Usage = () => (
  <Box gridGap="var(--spacer-s)">
    <AsyncButton isLoading onClick={alert} />
    <AsyncButton
      icon={CheckIcon}
      isLoading
      loadingText="Loading..."
      onClick={alert}
    >
      Button
    </AsyncButton>
  </Box>
);

export const IconOnly = (
  <AsyncButton icon={CheckIcon} isLoading onClick={alert} />
);

export const AdvancedUsage = () => {
  const [saved, setSaved] = useState(false);
  const asyncFunc = async () =>
    new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  return (
    <AsyncButton
      color={saved ? ButtonColor.SUCCESS : ButtonColor.PRIMARY}
      icon={saved ? CheckIcon : undefined}
      loadingText="Loading..."
      onClick={async () => {
        await asyncFunc();
        setSaved(true);
      }}
    >
      {saved ? 'Saved' : 'Save'}
    </AsyncButton>
  );
};
