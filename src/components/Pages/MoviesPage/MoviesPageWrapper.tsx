import { useEffect, useState } from "react";
import axios from "axios";
import MovieThread from "../../MovieThread";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  release_date: string;
}

function MoviesPageWrapper() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        const topTwentyFive = res.data.results.slice(0, 25);
        setMovies(topTwentyFive);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-6">
      {movies.map((movie) => (
        <MovieThread
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
          voteCount={movie.vote_count}
          overview={movie.overview}
          releaseDate={movie.release_date}
        />
      ))}
    </div>
  );
}

export default MoviesPageWrapper;
