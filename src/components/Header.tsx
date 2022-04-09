import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/" data-testid="home-link">
          Home
        </Link>
        <Link to="/about-us" data-testid="about-us-link">
          About Us
        </Link>
      </nav>
    </header>
  );
}
