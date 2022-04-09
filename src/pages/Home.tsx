import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div data-testid="home-page">
      <h1>Home</h1>
      <SearchBar />
      <CardList />
    </div>
  );
}
