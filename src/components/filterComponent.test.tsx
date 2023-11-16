import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterComponent } from "./filterComponent";

describe("FilterComponent", () => {
  const mockSetIsfilterByQueryTitle = jest.fn();

  it("renders correctly", () => {
    render(<FilterComponent setIsfilterByQueryTitle={() => {}} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("calls setIsfilterByQueryTitle with true when checkbox is checked", () => {
    render(
      <FilterComponent setIsfilterByQueryTitle={mockSetIsfilterByQueryTitle} />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockSetIsfilterByQueryTitle).toHaveBeenCalledWith(true);
  });
});
