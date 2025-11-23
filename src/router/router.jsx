import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from '../pages/Menu/Home';
import About from '../pages/Menu/About';
import Features from '../pages/Menu/Features';
import Contact from '../pages/Menu/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

export default router;
