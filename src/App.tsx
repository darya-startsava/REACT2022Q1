import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CardList from './components/card-list';
import SearchBar from './components/search-bar';

function Home() {
  return (
    <div>
      <header>
        <h1>Home</h1>
      </header>
      <SearchBar />
      <CardList />
      <nav>
        <Link to="/about-us">About Us</Link>
      </nav>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <p>This is the page with some information about us.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

function Error404() {
  return (
    <div>
      <header>
        <h1>404</h1>
      </header>
      <main>
        <p>Page not found</p>
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
