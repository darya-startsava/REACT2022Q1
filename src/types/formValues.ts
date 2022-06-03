type FormValues = {
  name: string;
  gender: string;
  dateOfBirth: string;
  countryOfBirth: string;
  movieGenres?: Array<string>;
  picture: FileList | null;
};
export default FormValues;
