// tslint:disable: react-a11y-role-has-required-aria-props
// tslint:disable: react-a11y-no-onchange
import classNames from 'classnames';
import { User } from 'Models/index';
import React from 'react';
import styles from './Select.scss'; // tslint:disable-line

interface ISelectProps {
  className?: string;
  options: User[];
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
    options.map((user: User) => {
      const { id, username } = user;

      return (
        <option key={id} data-id={id} value={username}>
          {username}
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
