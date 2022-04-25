type CardType = {
  id: number;
  image?: string;
  uploadedImage?: string | undefined;
  name: string | undefined;
  year?: number;
  director?: string;
  actors?: Array<string>;
  imdb?: number;
  oscars?: number;
  gender?: string;
  dateOfBirth?: string | undefined;
  countryOfBirth?: string | undefined;
  movieGenres?: Array<string>;
  overview?: string;
  releaseDate?: string;
  voteAverage?: string;
  isModal: boolean;
};

export default CardType;
