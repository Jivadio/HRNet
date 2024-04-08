import { render, screen } from "@testing-library/react";import Button from "./Button";import "@testing-library/jest-dom";import { IconType } from "./Button.types";import { BrowserRouter } from 'react-router-dom';describe("Button", () => {  test('Renders button as button when type is button and href is not provided', () => {    render(<Button label="test" type="button" />);    const buttonElement = screen.getByRole('button');    expect(buttonElement).toBeInTheDocument();  });  test('Renders button as link with correct href when type is link and href is provided', () => {    render(        <BrowserRouter>          <Button label="test" type="link" href="/testpath" />        </BrowserRouter>    );    const buttonElement = screen.getByRole('link');    expect(buttonElement).toBeInTheDocument();    expect(buttonElement).toHaveAttribute('href', '/testpath');  });  test('Renders button icon when icon is defined and exists', () => {    render(<Button label="test" type="button" icon={IconType.ArrowRight} />);    const iconElement = screen.getByTestId('button-icon');    expect(iconElement).toBeInTheDocument();  });  test('Does not render button icon when icon is not defined', () => {    render(<Button label="test" type="button" />);    const iconElement = screen.queryByTestId('button-icon');    expect(iconElement).toBeNull();  });  test('Does not render button icon when non-existent icon is provided', () => {    render(<Button label="test" type="button" icon={"NonExistentIcon" as never} />);    const iconElement = screen.queryByTestId('button-icon');    expect(iconElement).toBeNull();  });  test('Renders button as link when type is link and href is provided', () => {    render(        <BrowserRouter>          <Button label="test" type="link" href="/testpath" />        </BrowserRouter>    );    const buttonElement = screen.getByRole('link');    expect(buttonElement).toBeInTheDocument();    expect(buttonElement).toHaveAttribute('href', '/testpath');  });  test('Renders button as link when type is link and href is provided', () => {    render(        <BrowserRouter>          <Button label="test" type="link" href="/testpath" />        </BrowserRouter>    );    const buttonElement = screen.getByRole('link');    expect(buttonElement).toBeInTheDocument();    expect(buttonElement).toHaveAttribute('href', '/testpath');  });  test('Renders button as link when type is link and href is provided and have icon', () => {    render(        <BrowserRouter>          <Button label="test" type="link" href="/testpath" icon={IconType.ArrowRight} />        </BrowserRouter>    );    const buttonElement = screen.getByRole('link');    expect(buttonElement).toBeInTheDocument();    expect(buttonElement).toHaveAttribute('href', '/testpath');    const iconElement = screen.getByTestId('button-icon');    expect(iconElement).toBeInTheDocument();  });  test('Does not render anything when type is neither button nor link', () => {    render(<Button label="test" type={"other" as never} />);    const buttonElement = screen.queryByRole('button');    const linkElement = screen.queryByRole('link');    expect(buttonElement).not.toBeInTheDocument();    expect(linkElement).not.toBeInTheDocument();  });});