import React from "react";
import { render, fireEvent, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Datepicker from "./DatePicker";

describe("Datepicker", () => {
  test("renders correctly", () => {
    const { getByRole } = render(
      <Datepicker name="test" refHook={React.createRef()} />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  test("populates day dropdown correctly", () => {
    const { getByTestId } = render(
      <Datepicker name="test" refHook={React.createRef()} />
    );
    fireEvent.click(getByTestId("day-dropdown"));
    const dayDropdown = getByTestId("day-dropdown");
    const options = within(dayDropdown).getAllByRole("option");
    expect(options).toHaveLength(32);
  });

  test("populates month dropdown correctly", () => {
    const { getByTestId } = render(
      <Datepicker name="test" refHook={React.createRef()} />
    );
    fireEvent.click(getByTestId("month-dropdown"));
    const monthDropdown = getByTestId("month-dropdown");
    const options = within(monthDropdown).getAllByRole("option");
    expect(options).toHaveLength(13);
  });

  test("populates year dropdown correctly", () => {
    const { getByTestId } = render(
      <Datepicker name="test" refHook={React.createRef()} />
    );
    fireEvent.click(getByTestId("year-dropdown"));
    const yearDropdown = getByTestId("year-dropdown");
    const options = within(yearDropdown).getAllByRole("option");
    expect(options).toHaveLength(new Date().getFullYear() - 1922 + 1);
  });

  test("saves date correctly", async () => {
    const { getByRole, getByTestId, getByText } = render(
      <Datepicker name="test" refHook={React.createRef()} />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.click(input);

    const daySelect = getByTestId("day-select");
    const monthSelect = getByTestId("month-select");
    const yearSelect = getByTestId("year-select");

    fireEvent.change(daySelect, { target: { value: "1" } });
    fireEvent.change(monthSelect, { target: { value: "Janvier" } });
    fireEvent.change(yearSelect, {
      target: { value: new Date().getFullYear().toString() },
    });

    const saveButton = getByText("Sauvegarder");
    fireEvent.click(saveButton);

    await waitFor(() =>
      expect(input.value).toBe("01/01/" + new Date().getFullYear())
    );
  });
});
