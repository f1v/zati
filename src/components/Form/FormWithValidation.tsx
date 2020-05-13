import { Formik, FormikHandlers, FormikHelpers } from 'formik';
import React, { ReactElement } from 'react';
import * as Yup from 'yup';

interface IFormWithValidationProps {
  children: ReactElement;
  initialValues: Object;
  validationSchema?: Yup.MixedSchema;
  onSubmit?: Function;
}

export const FormWithValidation: React.FunctionComponent<
  IFormWithValidationProps
> = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: IFormWithValidationProps): React.ReactElement => {
  const handleSubmit: (
    values: Object,
    formikHelpers: FormikHelpers<Object>
  ) => void = (data: Object, { resetForm }: { resetForm: Function }): void => {
    resetForm();
    onSubmit(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik: FormikHandlers): ReactElement => (
        <form onSubmit={formik.handleSubmit}>{children}</form>
      )}
    </Formik>
  );
};
