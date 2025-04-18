import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MiniMovieThread from "../MiniMovieThread";

// Define the Movie type
interface Movie {
  id: number;
  title: string;
  poster_path: string; 
}

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        fetchSearchResults();
      }
    }, 1000); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    try {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          language: "en-US",
        },
      });
      setSearchResults(res.data.results.slice(0, 5));
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching search results", err);
      setIsLoading(false);
    }
  };

  return (
    <nav className="w-full px-6 py-4 bg-gray-900 text-white flex items-center justify-between">
      <div className="flex items-center space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-gray-300">
          ChaDB
        </Link>
        <Link to="/movies" className="hover:text-gray-300">
          Movies
        </Link>
        <Link to="/tv-series" className="hover:text-gray-300">
          TV Series
        </Link>
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

        {searchQuery && (
          <div className="absolute w-full bg-gray-800 text-white rounded-b-xl mt-2">
            {isLoading ? (
              <div className="p-2">Loading...</div>
            ) : (
              searchResults.map((movie) => (
                <div key={movie.id} className="p-2 hover:bg-gray-700 cursor-pointer">
                  <MiniMovieThread movie={movie} />
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
