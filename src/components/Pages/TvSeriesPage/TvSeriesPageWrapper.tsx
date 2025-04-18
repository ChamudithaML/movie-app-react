import { useEffect, useState } from "react";
import axios from "axios";
import MovieThread from "../../MovieThread";

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  first_air_date: string;
}

function TvSeriesPageWrapper() {
  const [tvShows, setTvShows] = useState<TVShow[]>([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/tv/popular", {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        const topTvShows = res.data.results.slice(0, 25);
        setTvShows(topTvShows);
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    };

    fetchTvShows();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">TV Shows</h1>
      {tvShows.map((tvShow) => (
        <MovieThread
          key={tvShow.id}
          title={tvShow.name}
          posterPath={tvShow.poster_path}
          rating={tvShow.vote_average}
          voteCount={tvShow.vote_count}
          overview={tvShow.overview}
          releaseDate={tvShow.first_air_date}
        />
      ))}
    </div>
  );
}

export default TvSeriesPageWrapper;
