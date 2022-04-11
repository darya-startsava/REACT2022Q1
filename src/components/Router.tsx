import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Error404 from '../pages/Error404';
import Forms from '../pages/Forms';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="forms" element={<Forms />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
