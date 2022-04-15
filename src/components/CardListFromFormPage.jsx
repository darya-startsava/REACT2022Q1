import CardFromFormPage from './CardFromFormPage';

export default function CardList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <CardFromFormPage {...item} />
        </li>
      ))}
    </ul>
  );
}
