import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time}</p>
            <div>
              <h3>Genres:</h3>
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
