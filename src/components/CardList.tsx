import Card from './Card/Card';
import CardType from '../types/card';

export default function CardList({ data }: { data: CardType[] }) {
  return (
    <ul className="list-group list-group-horizontal container">
      {data.map((item) => (
        <li className="list-group-item" key={item.id} id={item.id.toString()}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
}
