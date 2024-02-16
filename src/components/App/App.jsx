import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import './App.css';
import HomePage from '../../pages/HomePAge';
import MoviesPage from '../../pages/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
