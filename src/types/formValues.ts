type FormValues = {
  name: string;
  gender: string;
  dateOfBirth: string;
  countryOfBirth: string;
  movieGenres?: Array<string>;
  picture: FileList;
  scienceFiction: string;
  biopic: string;
  disasterMovie: string;
  fantasy: string;
  periodDrama: string;
};
export default FormValues;
