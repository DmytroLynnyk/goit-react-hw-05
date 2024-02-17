import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { MovieCast } from '../MovieCast/MovieCast';
import { MovieReviews } from '../MovieReviews/MovieReviews';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import MovieSearchPage from '../../pages/MovieSearchPage';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
// const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
// const MovieSearchPage = lazy(() => import('../../pages/MovieSearchPage'));

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

// Need to add case when query is not found.
// Need to change all import to "lazy".
