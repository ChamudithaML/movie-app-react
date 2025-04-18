import React from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date?: string; 
}

interface MiniMovieThreadProps {
  movie: Movie;
}

const MiniMovieThread: React.FC<MiniMovieThreadProps> = ({ movie }) => {
  const { title, poster_path, release_date } = movie;
  
  const year = release_date ? new Date(release_date).getFullYear() : "N/A";

  return (
    <div className="flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-lg">
      
      <img
        src={`https://image.tmdb.org/t/p/w92${poster_path}`} 
        alt={title}
        className="w-16 h-24 object-cover rounded-md"
      />
      
      <div className="flex flex-col">
        <span className="text-white font-medium">{title}</span>
        <span className="text-gray-400 text-sm">{year}</span>
      </div>
    </div>
  );
};

export default MiniMovieThread;
