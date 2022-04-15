import CardFromFormPage from './CardFromFormPage';

export default function CardList({ data }) {
  return (
    <ul className="list-group list-group-horizontal">
      {data.map((item) => (
        <li className="list-group-item" key={item.id}>
          <CardFromFormPage {...item} />
        </li>
      ))}
    </ul>
  );
}
