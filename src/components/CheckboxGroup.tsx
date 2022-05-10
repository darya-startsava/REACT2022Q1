import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import FormValues from '../types/formValues';

export default function CheckboxGroup(props: UseControllerProps<FormValues>) {
  const { field } = useController(props);
  function storeGenres(value: string, isChecked: boolean) {
    if (!field.value) {
      return value;
    }
    if (typeof field.value === 'string') {
      let array = field.value.split(', ');
      if (isChecked) {
        array.push(value);
        return array.join(', ');
      } else {
        array = array.filter((item) => item !== value);
      }
      return array.join(', ');
    }
  }

  return (
    <div
      className="mt-2"
      {...field}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        field.onChange(storeGenres(e.target.value, e.target.checked));
      }}
    >
      Movie genres:
      <label className="mx-1">
        Science fiction
        <input className="mx-1" type="checkbox" value="science fiction" />
      </label>
      <label className="mx-1">
        Biopic
        <input className="mx-1" type="checkbox" value="biopic" />
      </label>
      <label className="mx-1">
        Disaster movie
        <input className="mx-1" type="checkbox" value="disaster movie" />
      </label>
      <label className="mx-1">
        Fantasy
        <input className="mx-1" type="checkbox" value="fantasy" />
      </label>
      <label className="mx-1">
        Period drama
        <input className="mx-1" type="checkbox" value="period drama" />
      </label>
    </div>
  );
}
