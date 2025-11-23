import { NavLink, Outlet } from 'react-router-dom';
import Button from '../ui/Button';

function Navbar() {
  return (
    <>
      <div>
        <nav className="bg-red-900 px-20 flex items-center justify-between h-16 text-white">
          <h1 className="text-primary text-2xl font-bold">MeetupHub</h1>
          <div className="flex gap-3 text-primary font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <Button text="Get Started" />
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
