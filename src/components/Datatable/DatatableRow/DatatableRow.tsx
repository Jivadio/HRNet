import { DatatableRowTypes } from "./DatatableRow.type";

export default function TableRow({
  employee,
  columns,
  onDelete,
}: DatatableRowTypes) {
  return (
    <tr
      key={employee.id}
      className="transition-all odd:bg-gray-100 even:bg-gray-50 hover:bg-yellow-200"
    >
      {columns.map((column) => (
        <td
          key={`td_${column.sortText}`}
          className="whitespace-nowrap border border-gray-400 p-2 px-4"
        >
          {employee[column.sortText]}
        </td>
      ))}
      <td className="border border-gray-400 p-2 px-4">
        <button
          onClick={() => onDelete(employee.id)}
          className="rounded-md bg-red-600 p-2 font-semibold text-white transition-all hover:bg-red-800 focus:bg-red-800"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
