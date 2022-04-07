import { Link } from 'react-router-dom';
import CardList from '../components/card-list';
import SearchBar from '../components/search-bar';

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/about-us">About Us</Link>
        </nav>
        <h1>Home</h1>
      </header>
      <SearchBar />
      <CardList />
    </div>
  );
}
