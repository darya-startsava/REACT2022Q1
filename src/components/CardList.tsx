import Card from './Card/Card';
import CardType from '../types/card';

interface CardListProps {
  onCardClick?: Function;
  data: CardType[];
}

export default function CardList(props: CardListProps) {
  return (
    <ul className="list-group list-group-horizontal container d-flex flex-wrap justify-content-center">
      {props.data.map((item) => (
        <li className="list-group-item" key={item.id} onClick={() => props.onCardClick!(item.id)}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
}
