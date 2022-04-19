import './Card.css';
import CardType from '../../types/card';

export default function Card({
  id,
  image,
  uploadedImage,
  name,
  year,
  director,
  actors,
  imdb,
  oscars,
  gender,
  dateOfBirth,
  countryOfBirth,
  movieGenres,
}: CardType) {
  return (
    <div className="my-1">
      {image && <img src={`posters/${image}`} className="card-image" alt="poster" />}
      {uploadedImage && <img src={uploadedImage} className="card-image" alt="avatar" />}
      <h5 className="card-title">{name}</h5>
      {year && <p>{year} year</p>}
      {director && <p>Director: {director}</p>}
      {actors && <p>Starring: {actors ? actors.join(', ') : ''}</p>}
      {imdb && <p>IMDb: {imdb}/10</p>}
      {oscars && <p>Oscars: {oscars}</p>}
      {gender && <p>{gender}</p>}
      {dateOfBirth && <p>Date of birth: {dateOfBirth}</p>}
      {countryOfBirth && <p>Country of birth: {countryOfBirth}</p>}
      {movieGenres && <p>Genres: {movieGenres ? movieGenres.join(', ') : ''}</p>}
    </div>
  );
}
