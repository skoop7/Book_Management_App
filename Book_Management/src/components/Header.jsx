import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/books/all" className="text-white hover:underline">
            Browse Books
          </Link>
        </li>
        <li>
          <Link to="/add-book" className="text-white hover:underline">
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
