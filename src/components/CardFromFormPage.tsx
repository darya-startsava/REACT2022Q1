import CardFromFormPageType from '../types/card-from-form-page';

export default function CardFromFormPage({
  id,
  image,
  name,
  gender,
  dateOfBirth,
  countryOfBirth,
  movieGenres,
}: CardFromFormPageType) {
  return (
    <div>
      <img src={image} width="200" height="auto" alt="avatar" />
      <h5>{name}</h5>
      <>{gender}</>
      <p>Date of birth: {dateOfBirth}</p>
      <p>Country of birth: {countryOfBirth}</p>
      <p>Genres: {movieGenres}</p>
    </div>
  );
}
