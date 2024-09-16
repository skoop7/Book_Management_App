import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p className="text-gray-600">By {book.author}</p>
      <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
