import { render, screen } from "@testing-library/react";
import { BooksGaleryComponent } from "./booksGaleryComponent";
import { BooksData } from "../redux/books/books.slice";

const mockBooksData: BooksData[] = [
  {
    id: "1",
    title: "Book 1",
    author: "Author 1",
    img: "book-1-image-url",
    info: "Information 1",
  },
  {
    id: "2",
    title: "Book 2",
    author: "Author 2",
    img: "book-2-image-url",
    info: "Information 2",
  },
];

test("render books when booksData is available", () => {
  render(<BooksGaleryComponent booksData={mockBooksData} isLoading={false} />);

  expect(screen.getAllByText("Title").length).toBe(mockBooksData.length);
});

test("do not render books when booksData is missing", () => {
  render(<BooksGaleryComponent booksData={[]} isLoading={true} />);

  expect(screen.queryAllByText("Title").length).toBe(0);
});
