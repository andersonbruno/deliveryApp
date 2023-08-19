import Search from "../components/Search";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("Search", () => {
  it("should render Search component", () => {
    render(<Search />);

    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});
