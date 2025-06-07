import { useState } from "react";
import axios from "axios";
import css from "./Loader.module.css";
import SearchBar from "../SearchBar/SearchBar";

import type { Movie, MoviesHttpResponse } from "./types"; // якщо є типи

export default function Loader() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get<MoviesHttpResponse>(
        `https://api.themoviedb.org/3/search/movie=${query}`
      );
      setMovies(response.data.hits);
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
    </>
  );
}
