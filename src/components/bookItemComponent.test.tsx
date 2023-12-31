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

  jest.mock("react-tooltip", () => ({
    Tooltip: ({ id }: { id: string }) => <div data-testid={`tooltip-${id}`} />,
  }));

  const bookItemData: BookItemPropsType = {
    id: "1",
    title: "Book 1",
    author: "Author 1",
    img: "book-1-image-url",
    info: "Information 1",
  };

  it("render book item component with all data", () => {
    const bookItemProps: BookItemPropsType = bookItemData;

    const imageAltText = `${bookItemProps.title} cover image`;

    render(<BookItemComponent {...bookItemProps} />);

    expect(screen.getByText(bookItemProps.title)).toBeInTheDocument();
    expect(screen.getByText(bookItemProps.author)).toBeInTheDocument();

    const imgElement = screen.getByAltText(imageAltText);
    expect(imgElement).toBeInTheDocument();
  });

  it("render book item component without author data", () => {
    const bookItemProps: BookItemPropsType = { ...bookItemData, author: "" };

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
    const bookItemProps: BookItemPropsType = { ...bookItemData, title: "" };

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
    const bookItemProps: BookItemPropsType = { ...bookItemData, img: "" };

    render(<BookItemComponent {...bookItemProps} />);

    expect(screen.getByText(bookItemProps.title)).toBeInTheDocument();
    expect(screen.getByText(bookItemProps.author)).toBeInTheDocument();

    const imgElement = screen.getByTestId("BrokenImageIcon");
    expect(imgElement).toBeInTheDocument();
  });
});
