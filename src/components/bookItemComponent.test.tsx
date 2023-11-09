import "@testing-library/jest-dom";
import { BookItemComponent, BookItemPropsType } from "./bookItemComponent";
import { render, screen } from "@testing-library/react";
import { MissingInformations } from "../consts";

describe("render book item component in every case", () => {
  jest.mock("react-parallax-tilt", () => {
    return {
      Tilt: ({ children }: { children: React.ReactNode }) => {
        return <div>{children}</div>;
      },
    };
  });

  it("render book item component with all data", () => {
    const bookItemProps: BookItemPropsType = {
      author: "Damian Wilk",
      title: "book'n'book",
      img: "http://books.google.com/books/content?id=0kFaAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      info: "",
      id: "",
    };

    const imageAltText = `${bookItemProps.title} cover image`;

    render(<BookItemComponent {...bookItemProps} />);

    expect(screen.getByText(bookItemProps.title)).toBeInTheDocument();
    expect(screen.getByText(bookItemProps.author)).toBeInTheDocument();

    const imgElement = screen.getByAltText(imageAltText);
    expect(imgElement).toBeInTheDocument();
  });

  it("render book item component without author data", () => {
    const bookItemProps: BookItemPropsType = {
      author: "",
      title: "book'n'book",
      img: "http://books.google.com/books/content?id=0kFaAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    };

    const imageAltText = `${bookItemProps.title} cover image`;

    render(<BookItemComponent {...bookItemProps} />);

    expect(screen.getByText(bookItemProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(MissingInformations.MissingAuthor)
    ).toBeInTheDocument();

    const imgElement = screen.getByAltText(imageAltText);
    expect(imgElement).toBeInTheDocument();
  });

  it("render book item component without title data", () => {
    const bookItemProps: BookItemPropsType = {
      author: "Damian Wilk",
      title: "",
      img: "http://books.google.com/books/content?id=0kFaAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    };

    const imageAltText = `${bookItemProps.title}cover image`;

    render(<BookItemComponent {...bookItemProps} />);

    expect(
      screen.getByText(MissingInformations.MissingTitle)
    ).toBeInTheDocument();
    expect(screen.getByText(bookItemProps.author)).toBeInTheDocument();

    const imgElement = screen.getByAltText(imageAltText);
    expect(imgElement).toBeInTheDocument();
  });

  it("render book item component without image data", () => {
    const bookItemProps: BookItemPropsType = {
      author: "Damian Wilk",
      title: "book'n'book",
      img: "",
    };

    render(<BookItemComponent {...bookItemProps} />);

    expect(screen.getByText(bookItemProps.title)).toBeInTheDocument();
    expect(screen.getByText(bookItemProps.author)).toBeInTheDocument();

    const imgElement = screen.getByTestId("BrokenImageIcon");
    expect(imgElement).toBeInTheDocument();
  });
});
