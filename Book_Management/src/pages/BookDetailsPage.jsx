import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.find((book) => book.id === parseInt(id))
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-xl mb-2">By {book.author}</p>
      <p className="mb-4">{book.description}</p>
      <p className="mb-4">Rating: {book.rating}/5</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Back to Browse
      </button>
    </div>
  );
}

export default BookDetailsPage;
