import React from 'react';
import { filmsInformation } from '../data/films-information';

export default class CardList extends React.Component {
  render() {
    return (
      <ul>
        {filmsInformation.map((item, index) => (
          <li key={index}>
            <img src={`posters/${item.image}`} width="200" height="auto" alt="poster" />
            <h5>&ldquo;{item.name}&rdquo;</h5>
            <p>{item.year} year</p>
            <p>Director: {item.director}</p>
            <p>Starring: {item.actors.join(', ')}</p>
            <p>IMDb: {item.imdb}/10</p>
            <p>Oscar: {item.oscars}</p>
          </li>
        ))}
      </ul>
    );
  }
}
