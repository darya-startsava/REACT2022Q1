import React from 'react';
import Card from './Card/Card';
import CardType from '../types/card';

interface ClassListProps {
  onCardClick?: Function;
  data: CardType[];
}

export default class CardList extends React.Component<ClassListProps> {
  render() {
    return (
      <ul className="list-group list-group-horizontal container d-flex flex-wrap justify-content-center">
        {this.props.data.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => this.props.onCardClick!(item.id)}
          >
            <Card {...item} />
          </li>
        ))}
      </ul>
    );
  }
}
