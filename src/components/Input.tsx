import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import FormValues from '../types/formValues';

export default function Input(props: UseControllerProps<FormValues>) {
  const { field } = useController(props);

  return (
    <>
      <label className="form-label">
        {/* @ts-ignore */}
        Name: <input className="form-control" {...field} placeholder={props.name} />
      </label>
    </>
  );
}
