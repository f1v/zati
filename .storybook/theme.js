import { create } from '@storybook/theming';
import Comments from '../src/stories/assets/zati_logo.svg';

export default create({
  base: 'light',
  brandTitle: 'zati',
  brandUrl: 'https://example.com',
  brandImage: Comments,

  colorPrimary: '#14c2e7',
  colorSecondary: '#543ac1',

  // UI
  appBg: 'linear-gradient(red, yellow)',
  appContentBg: '#fff',
  appBorderColor: '#f4f4f4',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#999',
  barSelectedColor: '#14c2e7',
  barBg: '#fff',

  // Form colors
  inputBg: 'red',
  inputBorder: 'yellow',
  inputTextColor: 'green',
  inputBorderRadius: 4,

  gridCellSize: 100,
});
