import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import Input from '../Input';
import Select from '../Select';
import DateInput from '../DateInput';
import FileInput from '../FileInput';
import CardList from '../CardList';
import CardType from '../../types/card';
import FormValues from '../../types/formValues';
import { ErrorMessage } from '@hookform/error-message';
import movieGenres from '../../data/movie-genres';

interface FormProps extends React.HTMLProps<HTMLFormElement> {}

export default function Form(props: FormProps) {
  const [data, setData] = useState<CardType[]>([]);
  const [isNewCardCreatedNow, setIsNewCardCreatedNow] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitSuccessful, isDirty },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit = (formData: FormValues) => {
    const movieGenres = formData?.movieGenres?.join(', ');
    setData((data) => [
      ...data,
      {
        ...formData,
        uploadedImage: URL.createObjectURL(formData.picture![0]),
        movieGenres,
        id: data.length,
        isFull: false,
      },
    ]);
    setIsNewCardCreatedNow(true);
  };

  useEffect(() => {
    if (isDirty) setIsNewCardCreatedNow(false);
  }, [isDirty]);

  useEffect(() => {
    reset({
      name: '',
      gender: '',
      dateOfBirth: '',
      countryOfBirth: '',
      movieGenres: [],
      picture: null,
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', {
            required: 'This field requires more than 1 symbol',
            minLength: { value: 2, message: 'This field requires more than 1 symbol' },
          })}
        />
        <div className="error-message mb-3">
          <ErrorMessage errors={errors} name="name" />
        </div>
        <div>
          Gender:
          <label className="mx-1">
            Male
            <input
              className="mx-1"
              type="radio"
              value="male"
              {...register('gender', {
                required: {
                  value: true,
                  message: 'Choose gender',
                },
              })}
            />
          </label>
          <label className="mx-1">
            Female
            <input
              className="mx-1"
              type="radio"
              value="female"
              {...register('gender', {
                required: {
                  value: true,
                  message: 'Choose gender',
                },
              })}
            />
          </label>
        </div>
        <div className="error-message mb-3">
          <ErrorMessage errors={errors} name="gender" />
        </div>
        <DateInput
          {...register('dateOfBirth', {
            required: 'This field must be filled',
            validate: (value) =>
              Date.parse(value) < Date.now() || 'Date must be earlier than today',
          })}
        />
        <div className="error-message mb-3">
          <ErrorMessage errors={errors} name="dateOfBirth" />
        </div>
        <Select {...register('countryOfBirth', { required: 'Choose country of birth' })} />
        <div className="error-message mb-3">
          <ErrorMessage errors={errors} name="countryOfBirth" />
        </div>
        <div className="mt-2">
          Movie genres:
          {movieGenres.map((item) => {
            return (
              <label key={item} className="mx-1">
                {item}
                <input
                  className="mx-1"
                  type="checkbox"
                  value={item}
                  {...register('movieGenres', {
                    required: {
                      value: true,
                      message: 'Choose at least one genre',
                    },
                  })}
                />
              </label>
            );
          })}
        </div>
        <div className="error-message mb-3">
          <ErrorMessage errors={errors} name="movieGenres" />
        </div>
        <FileInput
          {...register('picture', {
            validate: (value) =>
              (value && value?.[0].name.match(/.jpg$|.png$/) !== null) ||
              'Add file with extension .jpg or .png',
          })}
        />
        <div className="error-message mb-3">
          <ErrorMessage errors={errors} name="picture" />
        </div>
        <button
          disabled={
            !!errors.name ||
            !!errors.gender ||
            !!errors.dateOfBirth ||
            !!errors.countryOfBirth ||
            !!errors.movieGenres ||
            !!errors.picture ||
            !isDirty
          }
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        {isNewCardCreatedNow && (
          <div className="success-message">Your data has been successfully saved</div>
        )}
      </form>
      <CardList data={data} />
    </>
  );
}
