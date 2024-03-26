import Logo from "./images/logo.webp";
import { Link } from "react-router-dom";
import Button from "../Button/Button.tsx";

export default function Header() {
  return (
    <header className="bg-white" data-testid="custom-element">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/" className="-m-1.5 p-1.5" role="link" aria-label="HRNet">
          <span className="sr-only">HRNet</span>
          <img className="h-8 w-auto" src={Logo} alt="HRNet Logo" />
        </Link>
        <div className="flex flex-1 justify-end">
            <Button
                label="View Current Employees"
                type="link"
                href="/employees"
                className="text-sm font-semibold leading-6 text-black hover:text-gray-500 transition-colors duration-200" />
        </div>
      </nav>
    </header>
  );
}
