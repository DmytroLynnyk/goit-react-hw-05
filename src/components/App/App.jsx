import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import './App.css';
import HomePage from '../../pages/HomePAge';
import NotFoundPage from '../../pages/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import MovieSearchPage from '../../pages/MovieSearchPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
