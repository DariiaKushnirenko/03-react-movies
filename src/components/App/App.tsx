import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import { useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";

import fetchMovies  from './movieService';




