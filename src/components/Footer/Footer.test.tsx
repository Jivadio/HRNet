import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />);

    const footerElement = screen.getByText(
      "© 2024 HRNet. Tout droits réservés."
    );
    expect(footerElement).toBeInTheDocument();
  });
});
