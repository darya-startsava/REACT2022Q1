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
  movieGenres?: string;
  overview?: string;
  releaseDate?: string;
  voteAverage?: string;
  isFull: boolean;
};

export default CardType;
