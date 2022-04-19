import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import filmsInformation from '../data/films-information';

export default function Home() {
  return (
    <div data-testid="home-page">
      <h1>Home</h1>
      <SearchBar />
      <CardList data={filmsInformation} />
    </div>
  );
}
