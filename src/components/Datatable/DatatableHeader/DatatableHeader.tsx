import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { DatatableHeaderTypes } from "./DatatableHeader.type";

export default function HeaderCell({
  label,
  sortKey,
  handleSort,
  currentSort,
}: DatatableHeaderTypes) {
  return (
    <th className="relative whitespace-nowrap border border-gray-400 px-4 py-4 pr-8 transition-all">
      {label}
      <button
        onClick={() => handleSort("asc", sortKey)}
        className={`${
          currentSort === `${sortKey}_asc` ? "opacity-100" : "opacity-40"
        } absolute bottom-2/4 right-1 cursor-pointer transition-all`}
        aria-label={`Sort by ${sortKey} in ascending order`}
      >
        <ChevronUpIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSort("desc", sortKey)}
        className={`${
          currentSort === `${sortKey}_desc` ? "opacity-100" : "opacity-40"
        } absolute right-1 top-2/4 cursor-pointer transition-all`}
        aria-label={`Sort by ${sortKey} in descending order`}
      >
        <ChevronDownIcon className="w-4 h-4" />
      </button>
    </th>
  );
}
