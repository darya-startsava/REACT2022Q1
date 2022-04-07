import filmsInformation from '../data/films-information';
import Card from './Card';

export default function CardList() {
  return (
    <ul>
      {filmsInformation.map((item) => (
        <li key={item.id}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
}
