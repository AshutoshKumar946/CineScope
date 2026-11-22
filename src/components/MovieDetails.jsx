
function MovieDetails({ movie, onClose }) {

  // Convert IMDb rating out of 10 into stars out of 5
  const rating = Number(movie.imdbRating);
  const stars = Math.round(rating / 2);

  return (
    <div className="popup" onClick={onClose}>

      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close" onClick={onClose}>
          X
        </button>

        <h2>{movie.Title}</h2>

        <img
          src={movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"}
          alt={movie.Title}
          width="150"
        />

        <p><b>IMDb Rating:</b> {movie.imdbRating}</p>

        <div className="stars">
          {"★".repeat(stars)}
          {"☆".repeat(5 - stars)}
        </div>

        <p><b>Genre:</b> {movie.Genre}</p>

        <p><b>Plot:</b> {movie.Plot}</p>

        <p><b>Actors:</b> {movie.Actors}</p>

        <p><b>Released:</b> {movie.Released}</p>

      </div>

    </div>
  );
}

export default MovieDetails;
