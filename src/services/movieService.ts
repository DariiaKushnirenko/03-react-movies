import axios from 'axios';
import type { Movie } from "../types/movie";
const token = import.meta.env.VITE_TMDB_TOKEN;

interface MoviesHttpResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string):
  Promise<Movie[]> => {
  const response = await axios.get<MoviesHttpResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${token}`,
      },

    }
  );
  return response.data.results;
};


