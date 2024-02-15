import axios from 'axios';

const API_KEY = 'a0f4feaa128bed36e0868e07454924c0';

const ACCESS_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGY0ZmVhYTEyOGJlZDM2ZTA4NjhlMDc0NTQ5MjRjMCIsInN1YiI6IjY1Y2UxMDAxYTNiNWU2MDE4NTJjYzQ3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yhGBT9Nh_d9rnX7qKs-acxPXijQBOJ1GEZQxl8mReIY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = ACCESS_TOKEN;
axios.defaults.headers.accept = 'application/json';

// axios.defaults.params = {
//   language: 'en-US',
//   api_key: API_KEY,
//   per_page: 10,
// };

export const getTrendingMovie = async () => {
  const data = await axios.get('/trending/movie/day');

  const normalizedData = data.data.results.map(({ id, title }) => ({
    id,
    title,
  }));

  return { movies: normalizedData };
};
