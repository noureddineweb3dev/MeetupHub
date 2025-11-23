import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';

function Navbar() {
  return (
    <>
      <div>
        <nav className="bg-white px-10 m-4 flex items-center justify-between h-13  border-b border-gray-300 rounded-4xl">
          <h1 className="text-black text-xl font-bold">MeetupHub</h1>

          <div className="flex justify-between items-center gap-3 text-sm">
            <NavLink to="/">Discover</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/Login">Log in</NavLink>
            <Button text="Create Meetup" />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
