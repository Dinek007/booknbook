import "@testing-library/jest-dom";
import { ErrorComponent } from "./errorComponent";
import { Communicates } from "../consts";
import { render, screen } from "@testing-library/react";

describe("render error component", () => {
  it("error componet rendered with corectly text", () => {
    const messageProp = Communicates.NotFound;
    render(<ErrorComponent message={messageProp} />);

    const expectedText = `Error: ${messageProp}`;

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
