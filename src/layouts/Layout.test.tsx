import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import "@testing-library/jest-dom";

import { BrowserRouter as Router } from "react-router-dom";

describe("Layout", () => {
  test("renders Layout component with children", () => {
    render(
      <Router>
        <Layout>Test Child</Layout>
      </Router>
    );

    const childElement = screen.getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });

  test("renders Header component", () => {
    render(
      <Router>
        <Layout>Test Child</Layout>
      </Router>
    );

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(
      <Router>
        <Layout>Test Child</Layout>
      </Router>
    );

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
