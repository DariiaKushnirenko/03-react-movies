import SearchBar from "../SearchBar/SearchBar";
import css from "./ErrorMessage.module.css";
import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import css from "./ErrorMessage.module.css";
import type { Movie, MoviesHttpResponse } from "../types"; // або свій шлях

export default function ErrorMessage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setIsError(false);
      const response = await axios.get<MoviesHttpResponse>(
        `https://api.themoviedb.org/3/search/movie=${query}`
      );
      setMovies(response.data.hits);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isError && (
        <p className={css.text}>There was an error, please try again...</p>
      )}
    </>
  );
}
