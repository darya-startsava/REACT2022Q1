import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <h1>About Us</h1>
      </header>
      <main>
        <p>This is the page with some information about us.</p>
      </main>
    </div>
  );
}
