import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="nav justify-content-center">
        <Link className="nav-item mx-2" to="/" data-testid="home-link">
          Home
        </Link>
        <Link className="nav-item mx-2" to="/forms" data-testid="forms-link">
          Forms
        </Link>
        <Link className="nav-item mx-2" to="/about-us" data-testid="about-us-link">
          About Us
        </Link>
      </nav>
    </header>
  );
}
