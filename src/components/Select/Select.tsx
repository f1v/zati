// tslint:disable: react-a11y-role-has-required-aria-props
// tslint:disable: react-a11y-no-onchange
import classNames from 'classnames';
import React from 'react';
import styles from './Select.scss'; // tslint:disable-line

type ISelectOption = {
  name?: string;
  value?: string;
};

interface ISelectProps {
  className?: string;
  options: ISelectOption[];
  selected?: string[];
  onDropdownSelected?(e: React.ChangeEvent<HTMLSelectElement>): void;
}
/**
 * Multi-selectable list component
 */
export const Select: React.SFC<ISelectProps> = (
  props: ISelectProps
): React.ReactElement => {
  const { className, onDropdownSelected, options, selected } = props;

  const createOptions: Function = (): JSX.Element[] =>
    options.map((opt: ISelectOption) => {
      const { name, value } = opt;

      return (
        <option key={value} data-id={value} value={value}>
          {name}
        </option>
      );
    });

  return (
    <select
      className={classNames(className, styles.select)}
      onChange={onDropdownSelected}
      value={selected}
      size={10}
      multiple
      required
    >
      {createOptions()}
    </select>
  );
};
