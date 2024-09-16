import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookList from "../components/BookList";

function HomePage() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
  const books = useSelector((state) => state.books);
  const popularBooks = books.slice(0, 3);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Online Library</h1>
      <h2 className="text-2xl font-semibold mb-2">Book Categories</h2>
      <ul className="mb-4">
        {categories.map((category) => (
          <li key={category} className="mb-1">
            <Link
              to={`/books/${category.toLowerCase()}`}
              className="text-blue-500 hover:underline"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Popular Books</h2>
      <BookList books={popularBooks} />
    </div>
  );
}

export default HomePage;
