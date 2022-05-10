type FormValues = {
  name: string;
  gender: string;
  dateOfBirth: string;
  countryOfBirth: string;
  movieGenres: string;
  picture: FileList;
  uploadedImage?: string | undefined;
};
export default FormValues;
