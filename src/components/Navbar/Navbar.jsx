import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navbar.module.css';

const buildLInkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navbar = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLInkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLInkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
