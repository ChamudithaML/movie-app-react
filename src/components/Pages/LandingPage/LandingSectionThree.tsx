import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function LandingSectionThree() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
            },
          }
        );
        const topTen = res.data.results.slice(0, 10);
        setMovies(topTen);
      } catch (err) {
        console.error("Failed to fetch top rated movies:", err);
      }
    };

    fetchTopRatedMovies();
  }, []);

  const nextMovies = () => {
    if (currentIndex < movies.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevMovies = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedMovies = movies.slice(currentIndex, currentIndex + 4);

  return (
    <section className="w-full py-8 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Top Rated Movies</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto relative">
        
        <button
          onClick={prevMovies}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50 z-10"
        >
          &#8592;
        </button>
        
        {displayedMovies.map((movie) => (
          <div
            key={movie.id}
            className="w-1/4 min-w-[250px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}

        <button
          onClick={nextMovies}
          disabled={currentIndex >= movies.length - 4}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50 z-10"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default LandingSectionThree;
