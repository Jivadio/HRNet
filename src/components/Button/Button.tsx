import {ButtonTypes, IconType} from "./Button.types.tsx";
import { ArrowRightIcon} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ICONS = {
    [IconType.ArrowRight]: ArrowRightIcon,
};

// @ts-ignore
export default function Button({ label, icon, type, href, className }: ButtonTypes) {
    const IconComponent = icon ? ICONS[icon] : null;
    const commonClasses = "inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

    if (type === "button") {
        return (
            <button type="button" className={commonClasses + (className ? ` ${className}` : "")}>
                { label }
                { IconComponent && <IconComponent data-testid="button-icon" className="h-4 w-4" /> }
            </button>
        );
    }

    if (type === "link" && href) {
        return (
            <Link to={href} className={commonClasses + (className ? ` ${className}` : "")}>
                { label }
                { IconComponent && <IconComponent data-testid="button-icon" className="h-4 w-4" /> }
            </Link>
        );
    }

    return null;
}