type CardType = {
  id: number | string;
  image?: string;
  uploadedImage?: string | null | undefined;
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
