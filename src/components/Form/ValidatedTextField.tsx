import { FieldAttributes, useField } from 'formik';
import React from 'react';
import { Input } from 'zati';

/**
 * Text field for use with Forms
 */
export const ValidatedTextField: React.FC<FieldAttributes<{}>> = ({
  ...props
}: any): React.ReactElement => {
  const [field, meta] = useField<{}>(props);
  const { error, touched } = meta;
  const errorText: string = error && touched ? error : '';

  return (
    <div>
      <Input {...field} {...props} />
      {!!error && <div>{errorText}</div>}
    </div>
  );
};
