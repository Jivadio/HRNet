import { EmployeesTypes } from "../../../types/EmployeeTypes";

export interface DatatableRowTypes {
  employee: EmployeesTypes;
  columns: Array<{
    title: string;
    sortText: keyof EmployeesTypes;
  }>;
  onDelete: (id: string) => void;
}
