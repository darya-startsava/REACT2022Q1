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
  overview,
  releaseDate,
  voteAverage,
  isModal,
}: CardType) {
  let style = {};
  if (isModal) {
    style = { width: 500 };
  }
  return (
    <div className="my-1 d-flex flex-column card-item" style={style}>
      {isModal && (
        <button className="align-self-end close-button" aria-label="close modal">
          <img src="./svg/close.svg" className="close-img" alt="" />
        </button>
      )}
      {image && <img src={image} className="align-self-center card-image" alt="poster" />}
      {uploadedImage && <img src={uploadedImage} className="card-image" alt="avatar" />}
      <h5 className="align-self-center card-title">{name}</h5>
      {year && <p>{year} year</p>}
      {director && <p>Director: {director}</p>}
      {actors && <p>Starring: {actors ? actors.join(', ') : ''}</p>}
      {imdb && <p>IMDb: {imdb}/10</p>}
      {oscars && <p>Oscars: {oscars}</p>}
      {gender && <p>{gender}</p>}
      {dateOfBirth && <p>Date of birth: {dateOfBirth}</p>}
      {countryOfBirth && <p>Country of birth: {countryOfBirth}</p>}
      {movieGenres && <p>Genres: {movieGenres ? movieGenres.join(', ') : ''}</p>}
      {isModal && <p>Overview: {overview}</p>}
      {isModal && <p>Release date: {releaseDate}</p>}
      {isModal && <p>Vote average: {voteAverage}</p>}
    </div>
  );
}
