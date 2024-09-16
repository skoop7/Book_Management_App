import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A classic novel about racial injustice",
    category: "Fiction",
    rating: 4.5,
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A tale of the American Dream",
    category: "Fiction",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    description: "An epic science fiction novel",
    category: "Sci-Fi",
    rating: 4.7,
  },
  // Add more initial books as needed
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.length + 1,
        ...action.payload,
      };
      state.push(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
