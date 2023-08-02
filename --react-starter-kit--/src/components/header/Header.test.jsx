import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders --react-starter-kit--", () => {
  render(<Header />);
  const headerElement = screen.getByText(/-- React Starter Kit --/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveClass("title");
});
