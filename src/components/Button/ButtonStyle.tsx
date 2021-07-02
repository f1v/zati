import styled from 'styled-components';

export const Base = styled.button`
  border: none;
  color: var(--zati-color-white);
  cursor: pointer;
  font: var(--zati-defaults-type);
  height: 3rem;
  line-height: 3rem;
  margin: 0;
  outline: none;
  padding: 0 var(--zati-defaults-element-padding);
  text-decoration: none;
  transition: 0.6s ease background-color, 0.4s ease box-shadow, 0.6s ease color;
  white-space: nowrap;

  &.compact {
    line-height: calc(2.6 * 1rem);
    padding: 0 var(--zati-defaults-element-padding-compact);
  }

  &.block {
    display: block;
    width: 100%;
  }

  &.inline {
    display: inline-block;
    width: auto;
  }

  &.rounded {
    border-radius: var(--zati-defaults-border-radius);
  }

  &.disabled {
    background-color: var(--zati-color-grey-lighter) !important;
    color: var(--zati-color-grey);
    pointer-events: none;
  }

  &.link {
    background-color: transparent;
    color: var(--zati-color-blue);
    text-decoration: underline;
    transition: 0.4s ease;

    &:focus,
    &:hover {
      background-color: var(--zati-color-grey-lighter);
    }
  }

  &.error {
    background-color: var(--zati-color-red);

    &:focus,
    &:hover {
      box-shadow: 0 0 0 4px var(--zati-color-red-light);
    }
  }

  &.primary {
    background-color: var(--zati-color-blue);

    &:focus,
    &:hover {
      box-shadow: 0 0 0 4px var(--zati-color-blue-light);
    }
  }

  &.secondary {
    background-color: var(--zati-color-purple);

    &:focus,
    &:hover {
      box-shadow: 0 0 0 4px var(--zati-color-purple-light);
    }
  }

  &.success {
    background-color: var(--zati-color-teal);

    &:focus,
    &:hover {
      box-shadow: 0 0 0 4px var(--zati-color-teal-light);
    }
  }

  &.warning {
    background-color: var(--zati-color-yellow);

    &:focus,
    &:hover {
      box-shadow: 0 0 0 4px var(--zati-color-yellow-light);
    }
  }

  &.none {
    background-color: transparent;
    border-radius: 0;
    color: inherit;
    height: auto;
    font-size: inherit;
    font-weight: inherit;
    line-height: unset;
    padding: 0;
  }

  &.transparent {
    background-color: transparent;

    &:focus,
    &:hover {
      background-color: rgba(155, 155, 155, 0.1);
    }
  }

  &.outline {
    background-color: var(--zati-color-white);

    &.primary {
      border: 1px solid var(--zati-color-blue);
      color: var(--zati-color-blue);
    }
  }

  &.hoverFadeDark {
    box-shadow: none;
    outline: none;

    &:focus,
    &:hover {
      box-shadow: none;
      background-color: var(--zati-color-purple-dark);
      color: var(--zati-color-white);
    }
  }

  &.iconBtn {
    cursor: pointer;

    &:hover svg path {
      fill: var(--zati-color-blue);
    }
  }
`;
