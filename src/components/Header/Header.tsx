import Logo from "./images/logo.webp";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white" data-testid="custom-element">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <Link to="/" className="-m-1.5 p-1.5" role="link" aria-label="HRNet">
                    <span className="sr-only">HRNet</span>
                    <img className="h-16 w-auto" src={Logo} alt="HRNet Logo" />
                </Link>
                <div className="flex flex-1 justify-end space-x-4">
                    <Link
                        to="/"
                        className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
                        View Current Employees
                    </Link>
                    <Link
                        to="/create"
                        className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200">
                        Create Employees
                    </Link>
                </div>
            </nav>
        </header>
    );
}
