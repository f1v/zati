import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Dimensions */
    --dimensionYNarrow: 3rem; /* 48px */
    --dimensionYRegular: 3.5rem; /* 56px */
    --dimensionYWide: 4rem; /* 64px */
  
    --spacer-xxs: 0.125rem; /* 2px */
    --spacer-xs: 0.25rem; /* 4px */
    --spacer-s: 0.5rem; /* 8px */
    --spacer-m: 1rem; /* 16px */
    --spacer-l: 1.5rem; /* 24px */
    --spacer-xl: 2.25rem; /* 36px */
    --spacer-xxl: 3rem; /* 48px */
  
    /* Colors */
    --zati-color-red: #f65e23;
    --zati-color-yellow: #e9b20a;
    --zati-color-blue: #14c2e7;
    --zati-color-purple: #543ac1;
    --zati-color-teal: #1ac1c1;
    --zati-color-white: #fff;
  
    --zati-color-black: #272d36;
    --zati-color-grey-darkest: #404854; /* #424141; */
    --zati-color-grey-dark: #919aa7; /* #9499a2; */
    --zati-color-grey: #aebecb;
    --zati-color-grey-light: #d7e5e7;
    --zati-color-grey-lighter: #ebf2f3;
    --zati-color-grey-lightest: #f7f9fa;
  
    /* Color Variants */
    --zati-color-blue-light: #a1e7f5;
    --zati-color-blue-lightest: #e7f9fd;
  
    /* @FIXME Interpolating SCSS with the variables is working but
    /* throws an error and seems to slow the build down. Hard-coding the
    /* variables for now. */
    --zati-color-purple-darkest: #3a2886; /* #{$purple-darkest}; */
    --zati-color-purple-darker: #402c92; /* #{$purple-darker}; */
    --zati-color-purple-dark: #432e9a; /* #{$purple-dark}; */
    --zati-color-purple-light: #bbb0e6;
    --zati-color-purple-lightest: #eeecf9;
  
    --zati-color-red-light: #fbbfa7;
    --zati-color-red-lightest: #ffefe9;
  
    --zati-color-yellow-light: #f3d884;
    --zati-color-yellow-lightest: #fdf8e7;
  
    --zati-defaults-color-border: var(--zati-color-grey-light);
    --zati-defaults-color-text: var(--zati-color-grey-darkest);
  
    /* Typography */
    --zati-type-family: 'BlinkMacSystemFont', 'Rubik', 'Open Sans'; /* 'BlinkMacSystemFont' */
  
    --zati-type-light: 100;
    --zati-type-regular: 400;
    --zati-type-semi-bold: 600;
    --zati-type-bold: 800;
  
    --zati-defaults-type: var(--zati-type-regular) 1rem var(--zati-type-family);
  
    /* Borders */
    --zati-defaults-border: 1px solid var(--zati-defaults-color-border);
    --zati-defaults-border-radius: 8px;
  
    --zati-defaults-icon-color: var(--zati-color-grey);
  
    --zati-defaults-element-padding: var(--spacer-l);
    --zati-defaults-element-padding-compact: var(--spacer-m);
    --zati-defaults-element-height: var(--dimensionYRegular);
  }
`;
