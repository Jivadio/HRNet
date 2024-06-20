import { EmployeesTypes } from "../../../types/EmployeeTypes";

export interface DatatableHeaderTypes {
  label: string;
  sortKey: keyof EmployeesTypes;
  handleSort: (order: "asc" | "desc", field: keyof EmployeesTypes) => void;
  currentSort: string;
}
