import CardType from '../types/card';

export default function Card({ id, image, name, year, director, actors, imdb, oscars }: CardType) {
  return (
    <div>
      <img src={`posters/${image}`} width="200" height="auto" alt="poster" />
      <h5>&ldquo;{name}&rdquo;</h5>
      <p>{year} year</p>
      <p>Director: {director}</p>
      <p>Starring: {actors}</p>
      <p>IMDb: {imdb}/10</p>
      <p>Oscars: {oscars}</p>
    </div>
  );
}
