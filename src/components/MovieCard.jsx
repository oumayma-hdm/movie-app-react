import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick(params) {
    alert("clicked");
  }

  console.log(movie); // Log the movie object to check its structure

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ৻ꪆ
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3> {/* This should display the title */}
        <p>{movie.release_date}</p> {/* This should display the release date */}
      </div>
    </div>
  );
}
export default MovieCard;