import css from "./ErrorMessage.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies} from "../../services/movieService";
import type { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";


export default function ErrorMessage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setIsError(false);
      const results = await fetchMovies(query);
      setMovies(results);
    } catch  {
      setIsError(true);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isError && (
        <>
          <p className={css.text}>There was an error, please try again...</p>
          {movies.length > 0 && <MovieGrid movies={movies} onSelect={() => {}} />}

        </>
      )}
    </>
  );
}