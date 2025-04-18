import { Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gray-900 text-white flex items-center justify-between">
      <div className="flex items-center space-x-6 text-lg font-medium">
        <a href="#" className="hover:text-gray-300">Movies</a>
        <a href="#" className="hover:text-gray-300">TV Series</a>
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-800 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
