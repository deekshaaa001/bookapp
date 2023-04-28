import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data.books))
      .catch((error) => setError(error));
  }, []);
      
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => setError(error));
  };
  

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="py-5 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-200 rounded-lg over-flow-auto shadow-lg p-2 flex flex-col"
            >
              <div className="h-3/4 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {book.name}
                </h2>
                <p className="text-gray-800 font-medium">{book.author}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {book.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-orange-950">
                    ${book.price}
                  </p>
                  <div className="flex">
                    <Link to={`/books/${book.id}`}>
                      <button className="bg-gray-900 hover:bg-blue-400 hover:text-gray-800 text-white font-bold py-2 px-4 rounded mr-2">
                        Update
                      </button>
                    </Link>

      

                    <button
                      className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(book.id)}
                    
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-8 right-8">
          <Link to="/addbook">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m"
                  />
              </svg>
              Add Books
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Books;