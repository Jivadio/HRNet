import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import "@testing-library/jest-dom";


describe("Header", () => {
  test("renders HRNet logo", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByAltText("HRNet Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders HRNet link", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const linkLogo = screen.getByRole("link", { name: "HRNet" });
    expect(linkLogo).toBeInTheDocument();
  });

  test("renders View Current Employees button", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const buttonElement = screen.getByRole("link", {
      name: "View Current Employees",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
