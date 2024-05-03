import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Dropdown from "./DropDown";
import React from "react";

describe("Dropdown", () => {
  const mockRef = React.createRef<HTMLSelectElement>();
  const name = "test-dropdown";
  const optionText = "Option 1";

  it("renders correctly", () => {
    render(
      <Dropdown name={name} refHook={mockRef}>
        <option value="">{optionText}</option>
      </Dropdown>
    );
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });

  it("uses the passed ref", () => {
    render(
      <Dropdown name={name} refHook={mockRef}>
        <option value="1">{optionText}</option>
      </Dropdown>
    );
    expect(mockRef.current).toBeInTheDocument();
  });

  it("uses the passed name prop", () => {
    render(
      <Dropdown name={name} refHook={mockRef}>
        <option value="1">{optionText}</option>
      </Dropdown>
    );
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveAttribute("name", name);
    expect(dropdown).toHaveAttribute("id", name);
  });

  it("renders the children", () => {
    render(
      <Dropdown name={name} refHook={mockRef}>
        <option value="1">{optionText}</option>
      </Dropdown>
    );
    const option = screen.getByText(optionText);
    expect(option).toBeInTheDocument();
  });

  it("handles selection of an option", () => {
    render(
      <Dropdown name={name} refHook={mockRef}>
        <option value="1">{optionText}</option>
      </Dropdown>
    );
    const dropdown = screen.getByRole("combobox");
    userEvent.selectOptions(dropdown, "1");
    expect(dropdown).toHaveValue("1");
  });
});
