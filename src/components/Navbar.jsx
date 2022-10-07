import { NavLink, Link } from 'react-router-dom';
import icon from '../assets/pokemonIcon.png';

export default function Navbar() {
  const activeLink = ' text-red-500 font-medium';
  const normalLink = '';

  return (
    <div className="bg-[#58585A] flex items-center justify-center px-5 py-5">
      <div className='flex justify-between items-center w-full max-w-screen-xl'>
        <Link to="/">
          <div>
            <img src={icon} className="h-8" />
          </div>
        </Link>
        <div className='text-white font-normal flex w-40 justify-between'>
          <NavLink end="/" to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/pokemones" className={({ isActive }) => isActive ? activeLink : normalLink}>
            <p>Pokemones</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
