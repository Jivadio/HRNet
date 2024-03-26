import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  test("renders Header component", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByAltText("HRNet Logo");
    expect(logo).toBeInTheDocument();

    const linkElement = screen.getByRole("link", {
      name: "View Current Employees",
    });
    expect(linkElement).toBeInTheDocument();

    const linkLogo = screen.getByRole("link", { name: "HRNet" });
    expect(linkLogo).toBeInTheDocument();
  });
});
