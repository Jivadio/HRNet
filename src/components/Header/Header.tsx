import Logo from "./images/logo.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/" className="-m-1.5 p-1.5" role="link" aria-label="HRNet">
          <span className="sr-only">HRNet</span>
          <img className="h-8 w-auto" src={Logo} alt="HRNet Logo" />
        </Link>
        <div className="flex flex-1 justify-end">
          <Link
            to="/employees"
            className="text-sm font-semibold leading-6 text-black hover:text-gray-500 transition-colors duration-200"
            role="link"
            aria-label="View Current Employees"
          >
            View Current Employees <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
