import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

describe("Modal", () => {
  it("renders the close button when closeButton is true", () => {
    const { getByTestId } = render(
      <Modal
        id="test"
        content="Test Content"
        open={true}
        onClose={jest.fn()}
        closeButton={true}
      />
    );
    expect(getByTestId("test-close")).toBeInTheDocument();
  });

  it("does not render the close button when closeButton is false", () => {
    const { queryByTestId } = render(
      <Modal
        id="test"
        content="Test Content"
        open={true}
        onClose={jest.fn()}
        closeButton={false}
      />
    );
    expect(queryByTestId("test-close")).not.toBeInTheDocument();
  });

  it("renders the close button when closeButton is true", () => {
    const { queryByTestId } = render(
      <Modal
        id="test"
        content="Test Content"
        open={true}
        onClose={jest.fn()}
        closeButton={true}
      />
    );
    expect(queryByTestId("test-close")).toBeInTheDocument();
  });

  it("does not render the close button when closeButton is false", () => {
    const { queryByTestId } = render(
      <Modal
        id="test"
        content="Test Content"
        open={true}
        onClose={jest.fn()}
        closeButton={false}
      />
    );
    expect(queryByTestId("test-close")).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal
        id="test"
        content="Test Content"
        open={true}
        onClose={onClose}
        closeButton={true}
      />
    );
    fireEvent.click(getByTestId("test-close"));
    expect(onClose).toHaveBeenCalled();
  });
});
