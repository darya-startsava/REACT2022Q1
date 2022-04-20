import Card from './Card/Card';
import CardType from '../types/card';

export default function CardList({ data }: { data: CardType[] }) {
  return (
    <ul className="list-group list-group-horizontal container">
      {data.map((item) => (
        <li className="list-group-item" key={item.id}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
}
