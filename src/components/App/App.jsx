import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { MovieCast } from '../MovieCast/MovieCast';
import { MovieReviews } from '../MovieReviews/MovieReviews';
import { Loader } from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MovieSearchPage = lazy(() => import('../../pages/MovieSearchPage'));

export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieSearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
