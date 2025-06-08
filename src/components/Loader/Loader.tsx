import { useState } from "react";
import css from "./Loader.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function Loader() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <p className={css.text}>Loading movies, please wait...</p>}
      {<MovieGrid movies={movies} onSelect={() => {}} />}
    </>
  );
}
