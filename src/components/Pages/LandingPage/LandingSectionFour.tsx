import { useEffect, useState } from "react";
import axios from "axios";

interface Person {
  id: number;
  name: string;
  profile_path: string;
}

function LandingSectionFour() {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentGroup, setCurrentGroup] = useState<number>(0);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const fetchPopularPeople = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/person/popular",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );
        const topEighteen = res.data.results.slice(0, 18);
        setPeople(topEighteen);
      } catch (err) {
        console.error("Failed to fetch popular people:", err);
      }
    };

    fetchPopularPeople();
  }, []);

  const getImageUrl = (path: string) =>
    `https://image.tmdb.org/t/p/w300${path}`;

  const groups = [
    people.slice(0, 6),
    people.slice(6, 12),
    people.slice(12, 18),
  ];

  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Celebrities</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {groups[currentGroup]?.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <img
              src={
                person.profile_path
                  ? getImageUrl(person.profile_path)
                  : "https://via.placeholder.com/150x150?text=No+Image"
              }
              alt={person.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
            <p className="mt-3 text-center font-medium">{person.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {groups.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentGroup(index)}
            className={`w-4 h-1 rounded-full transition-all duration-300 ${
              currentGroup === index ? "bg-white w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default LandingSectionFour;