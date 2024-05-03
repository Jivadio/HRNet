import { DropDownProps } from "./DropDown.types";

export default function Dropdown({
  name,
  refHook,
  children,
}: Readonly<DropDownProps>) {
  return (
    <select
      className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      ref={refHook}
      name={name}
      id={name}
    >
      {children}
    </select>
  );
}
