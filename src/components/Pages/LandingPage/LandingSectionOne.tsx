import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function LandingSectionOne() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [bigImage, setBigImage] = useState<Movie | null>(null); 

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const fetchTopMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );
        const topTen = res.data.results.slice(0, 10);
        setMovies(topTen);
        setBigImage(topTen[0]); 
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchTopMovies();
  }, []);

  const handleImageClick = (movie: Movie) => {
    setBigImage(movie);
  };

  const getImageUrl = (path: string | null) => {
    return path ? `https://image.tmdb.org/t/p/original${path}` : 'https://via.placeholder.com/1200x800'; 
  };

  return (
    <section className="w-full h-[80vh] flex gap-4 px-6 py-8">
      
      <div className="w-3/4 h-full flex flex-col items-center justify-between"> 
        {bigImage ? (
          <>
            <img
              src={getImageUrl(bigImage.poster_path)}
              alt={bigImage.title}
              className="w-full h-full object-cover rounded-2xl"
            />
            
            <h2 className="mt-4 text-xl font-semibold text-white text-center">
              {bigImage.title}
            </h2>
          </>
        ) : (
          <div>Loading...</div> 
        )}
      </div>

      <div className="w-1/4 h-full flex flex-col gap-4">
        {movies.slice(1, 4).map((movie) => (
          <img
            key={movie.id}
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="w-full h-1/3 object-cover rounded-2xl cursor-pointer" 
            onClick={() => handleImageClick(movie)} 
          />
        ))}
      </div>
    </section>
  );
}

export default LandingSectionOne;
