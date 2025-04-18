import React from 'react';

interface MovieThreadProps {
  title: string;
  posterPath: string;
  rating: number;
  voteCount: number;
  overview: string;
  releaseDate: string;
}

const MovieThread: React.FC<MovieThreadProps> = ({
  title,
  posterPath,
  rating,
  voteCount,
  overview,
  releaseDate,
}) => {
  return (
    <div className="flex gap-6 border border-zinc-700 rounded-xl p-4 mb-6 bg-zinc-900 text-white">
      <div className="w-40 min-w-40 h-60 overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-400 mt-1">Release Date: {releaseDate}</p>
        </div>

        <p className="mt-4 text-gray-200">{overview}</p>

        <div className="flex gap-6 mt-4 text-sm text-gray-300">
          <span>⭐ {rating.toFixed(1)} / 10</span>
          <span>🗳 {voteCount.toLocaleString()} votes</span>
        </div>
      </div>
    </div>
  );
};

export default MovieThread;
