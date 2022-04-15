type CardFromFormPageType = {
  id: number;
  image: string | undefined;
  name: string | undefined;
  gender: string;
  dateOfBirth: string | undefined;
  countryOfBirth: string | undefined;
  movieGenres: Array<string>;
};

export default CardFromFormPageType;
