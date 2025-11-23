import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Discover from '../pages/Menu/Discover';
import About from '../pages/Menu/About';
import Login from '../pages/Auth/Login';
import Contact from '../pages/Menu/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Discover />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
    </Route>
  )
);

export default router;
