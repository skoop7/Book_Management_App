import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

function BrowseBooksPage() {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (category === "all") {
      setFilteredBooks(allBooks);
    } else {
      setFilteredBooks(
        allBooks.filter((book) => book.category.toLowerCase() === category)
      );
    }
  }, [category, allBooks]);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const searchResults = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(lowercasedTerm) ||
        book.author.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredBooks(searchResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Browse Books: {category}</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default BrowseBooksPage;
