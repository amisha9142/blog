import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  // Get books
  const getAllBooks = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/book/get-book");
      if (data?.success) {
        setBooks(data?.books);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div>
      {books &&
        books.map((book) => (
          <BookCard
            key={book?._id}
            id={book?._id}
            isUser={localStorage.getItem("userId") === book?.user?._id}
            title={book?.title}
            description={book?.description}
            author={book?.author}
            price={book?.price}
            // author={book?.user?.username}
            time={book.createdAt}
          />
        ))}
    </div>
  );
};

export default Books;

