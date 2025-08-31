import { useState } from "react";
import { Link } from "react-router";

export default function Nav() {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-green-800 text-white">
      {/* Row 1 */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Buttons */}
       
        <div className="flex gap-3">
          <Link to="/login">
         <button className="px-4 py-2 rounded-lg bg-white text-green-800 font-semibold hover:bg-gray-200 transition">
            Login
          </button>
        </Link>
          <Link to="/reg">
            <button className="px-4 py-2 rounded-lg bg-yellow-400 text-green-900 font-semibold hover:bg-yellow-300 transition">
            Register
          </button>
          </Link>
        
        </div>
      </div>

      {/* Row 2 - Search */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </nav>
  );
}
