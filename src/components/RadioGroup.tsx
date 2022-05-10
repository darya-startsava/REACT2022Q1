import React from 'react';
import { useForm, useController, UseControllerProps } from 'react-hook-form';
import FormValues from '../types/formValues';

export default function RadioGroup(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);

  return (
    <div {...field}>
      Gender:
      <label className="mx-1">
        Male
        <input className="mx-1" type="radio" name="gender" value="male" />
      </label>
      <label className="mx-1">
        Female
        <input className="mx-1" type="radio" name="gender" value="female" />
      </label>
    </div>
  );
}
