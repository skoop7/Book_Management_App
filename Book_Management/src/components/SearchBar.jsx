import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title or author"
        className="border p-2 rounded"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
