import { EmployeesTypes } from "../../types/EmployeeTypes";

export interface DatatableProps {
  data: Array<EmployeesTypes>;
  onAction: (id: string) => void;
  columns: Array<{ title: string; sortText: keyof EmployeesTypes }>;
  paginationOptions: Array<number>;
}

export interface parametersInterface {
  filter: string;
  sort: [keyof EmployeesTypes, "asc" | "desc"];
}
