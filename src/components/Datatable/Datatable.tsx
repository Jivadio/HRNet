import { useCallback, useEffect, useState } from "react";
import DatatableHeader from "./DatatableHeader/DatatableHeader";
import DatatableRow from "./DatatableRow/DatatableRow";
import { employeeFilter, employeeSort } from "../../utils/employee";
import { EmployeesTypes } from "../../types/EmployeeTypes";
import { parametersInterface, DatatableProps } from "./Datatable.type";

export default function Datatable({
  data,
  onAction,
  columns,
  paginationOptions = [5, 10, 15],
}: DatatableProps) {
  const [allEmployees, setAllEmployees] = useState(data);
  const [displayedEmployees, setDisplayedEmployees] =
    useState<Array<EmployeesTypes>>(allEmployees);
  const [currentPageEmployees, setCurrentPageEmployees] = useState<
    Array<EmployeesTypes>
  >([]);

  const [tableParams, setTableParams] = useState<parametersInterface>({
    filter: "",
    sort: ["firstName", "asc"],
  });

  paginationOptions.sort((a, b) => a - b);
  const pageSizeIndex = paginationOptions.findIndex(
    (option) => option >= displayedEmployees.length
  );
  const validPaginationOptions =
    pageSizeIndex === -1
      ? paginationOptions
      : paginationOptions.slice(0, pageSizeIndex + 1);

  const [pagination, setPagination] = useState({
    perPage: validPaginationOptions[0],
    currentPage: 0,
  });

  let totalPages = Math.ceil(displayedEmployees.length / pagination.perPage);
  if (displayedEmployees.length === 0) totalPages = 1;

  const paginationStart = pagination.currentPage * pagination.perPage + 1;
  const paginationEnd = Math.min(
    displayedEmployees.length,
    (pagination.currentPage + 1) * pagination.perPage
  );

  const updatePaginatedEmployees = useCallback(
    (perPage: number, page: number) => {
      const paginated = displayedEmployees.slice(
        page * perPage,
        (page + 1) * perPage
      );
      setCurrentPageEmployees(paginated);
    },
    [displayedEmployees]
  );

  const handleFilterChange = (value: string) => {
    const filtered = employeeFilter(allEmployees, value);
    setTableParams({ ...tableParams, filter: value });
    setDisplayedEmployees(filtered);
  };

  const handleSortChange = (
    order: "asc" | "desc",
    field: keyof EmployeesTypes
  ) => {
    const sorted = employeeSort([...displayedEmployees], field, order);
    setTableParams({ ...tableParams, sort: [field, order] });
    setDisplayedEmployees(sorted);
  };

  useEffect(() => {
    const filtered = employeeFilter(data, tableParams.filter);
    const sorted = employeeSort(
      filtered,
      tableParams.sort[0],
      tableParams.sort[1]
    );
    setAllEmployees(data);
    setDisplayedEmployees(sorted);
  }, [data, tableParams]);

  useEffect(() => {
    updatePaginatedEmployees(pagination.perPage, pagination.currentPage);
  }, [updatePaginatedEmployees, pagination, displayedEmployees]);

  useEffect(() => {
    if (pagination.currentPage >= totalPages) {
      setPagination({ ...pagination, currentPage: totalPages - 1 });
    }
  }, [totalPages, pagination]);

  return (
    <>
      <section className="flex flex-col justify-between gap-4 p-1 sm:flex-row">
        <div>
          {validPaginationOptions.length > 1 &&
            displayedEmployees.length > 0 && (
              <label className="flex items-center gap-2" htmlFor="paginate">
                Show{" "}
                <select
                  name="paginate"
                  id="paginate"
                  onChange={(e) =>
                    setPagination({
                      ...pagination,
                      perPage: Number(e.target.value),
                    })
                  }
                  className="border-gray-300 rounded-md border p-2"
                >
                  {validPaginationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>{" "}
                records
              </label>
            )}
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleFilterChange(e.target.value)}
          className="rounded-md border border-gray-300 p-2"
        />
      </section>

      <div className="overflow-x-auto">
        <table className="mx-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 font-semibold">
              {columns.map((col) => {
                return (
                  <DatatableHeader
                    key={`th_${col.sortText}`}
                    label={col.title}
                    sortKey={col.sortText}
                    handleSort={handleSortChange}
                    currentSort={`${tableParams.sort[0]}_${tableParams.sort[1]}`}
                  />
                );
              })}
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPageEmployees.length === 0 ? (
              <tr className="even:bg-gray-100">
                <td
                  colSpan={columns.length + 1}
                  className="border border-gray-300 p-2 text-center"
                >
                  No records to display!
                </td>
              </tr>
            ) : (
              currentPageEmployees.map((employee) => (
                <DatatableRow
                  key={employee.id}
                  employee={employee}
                  columns={columns}
                  onDelete={onAction}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <section className="flex flex-col justify-between gap-4 p-1 sm:flex-row">
        <span className="text-lg">
          {displayedEmployees.length === 0
            ? "Showing 0 records"
            : `Showing ${paginationStart} to ${paginationEnd} of ${displayedEmployees.length} records 
            ${displayedEmployees.length !== allEmployees.length ? "(filtered)" : ""}`}
        </span>
        <div className="flex items-center justify-center gap-4">
          <span>
            Page {pagination.currentPage + 1} of {totalPages}
          </span>
          {pagination.currentPage >= 1 && (
            <button
              onClick={() =>
                setPagination({
                  ...pagination,
                  currentPage: pagination.currentPage - 1,
                })
              }
              className="rounded-sm border border-gray-300 bg-gray-200 px-4 py-2 transition-all hover:bg-gray-300 focus:bg-gray-300"
            >
              Previous page
            </button>
          )}
          {pagination.currentPage < totalPages - 1 && (
            <button
              onClick={() =>
                setPagination({
                  ...pagination,
                  currentPage: pagination.currentPage + 1,
                })
              }
              className="rounded-sm border border-gray-300 bg-gray-200 px-4 py-2 transition-all hover:bg-gray-300 focus:bg-gray-300"
            >
              Next page
            </button>
          )}
        </div>
      </section>
    </>
  );
}
