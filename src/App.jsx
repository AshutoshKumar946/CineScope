
import { useState, useEffect } from "react";
import axios from "axios";

import { APIURL, SEARCHAPI, DETAILSAPI } from "./api";

import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

import "./App.css";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load initial movies
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(APIURL);

      if (response.data.Response === "False") {
        setMovies([]);
        setError(response.data.Error);
      } else {
        setMovies(response.data.Search || []);
      }

    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }

  }

  // Search movies
  async function searchMovies(e) {

    e.preventDefault();

    if (search.trim() === "") {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        SEARCHAPI + encodeURIComponent(search)
      );

      if (response.data.Response === "False") {
        setMovies([]);
        setError("No movies found.");
      } else {
        setMovies(response.data.Search || []);
      }

    } catch (err) {
      setMovies([]);
      setError("Unable to search movies. Please try again.");
    } finally {
      setLoading(false);
      setSearch("");
    }

  }

  // Get movie details
  async function getMovieDetails(id) {

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(DETAILSAPI + id);

      if (response.data.Response === "False") {
        setError(response.data.Error);
      } else {
        setSelectedMovie(response.data);
      }

    } catch (err) {
      setError("Unable to load movie details.");
    } finally {
      setLoading(false);
    }

  }

  return (
    <div>

      <h1>CineScope</h1>

      <form onSubmit={searchMovies}>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>

      </form>

      {loading && <h2 className="message">Loading...</h2>}

      {error && <h2 className="error">{error}</h2>}

      <div className="movie-container">

        {movies.map((movie) => (

          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => getMovieDetails(movie.imdbID)}
          />

        ))}

      </div>

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

    </div>
  );
}

export default App;
