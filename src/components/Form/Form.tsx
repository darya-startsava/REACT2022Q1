import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import Input from '../Input';
import Select from '../Select';
import RadioGroup from '../RadioGroup';
import CheckboxGroup from '../CheckboxGroup';
import DateInput from '../DateInput';
import CardList from '../CardList';
import CardType from '../../types/card';
import FormValues from '../../types/formValues';

interface FormProps extends React.HTMLProps<HTMLFormElement> {}

export default function Form(props: FormProps) {
  const [data, setData] = useState<CardType[]>([]);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (formValues: FormValues) => {
    const uploadedImage = URL.createObjectURL(formValues.picture[0]);
    setData([
      Object.assign(
        {},
        {
          name: formValues.name,
          gender: formValues.gender,
          dateOfBirth: formValues.dateOfBirth,
          countryOfBirth: formValues.countryOfBirth,
          movieGenres: formValues.movieGenres.split(' ,'),
          uploadedImage,
        },
        { id: 0, isFull: false }
      ),
    ]);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="name" rules={{ required: true, minLength: 5 }} />
        {errors.name?.type === 'required' && 'Name is required'}
        {errors.name?.type === 'minLength' && 'This field requires more than 1 symbol'}
        <RadioGroup control={control} name="gender" rules={{ required: true }} />
        {errors.gender?.type === 'required' && 'Choose gender'}
        <DateInput control={control} name="dateOfBirth" rules={{ required: true }} />
        {errors.dateOfBirth?.type === 'required' && 'This field must be filled'}
        <Select control={control} name="countryOfBirth" rules={{ required: true }} />
        {errors.countryOfBirth?.type === 'required' && 'Country of Birth is required'}
        <CheckboxGroup control={control} name="movieGenres" rules={{ required: true }} />
        {errors.movieGenres?.type === 'required' && 'Choose at least one genre'}
        <input {...register('picture')} type="file" name="picture" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* <div className="success-message">{this.state.successMessage}</div> */}
      </form>
      <CardList data={data || [{ name: '0', id: 0, isFull: false }]} />
    </>
  );
}
