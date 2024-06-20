import { EmployeesTypes } from "../types/EmployeeTypes";

export function employeeFilter(
  employeeList: Array<EmployeesTypes>,
  value: string
) {
  const filteredEmployeeList = employeeList.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(value.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(value.toLowerCase()) ||
      employee.department.toLowerCase().includes(value.toLowerCase()) ||
      employee.street.toLowerCase().includes(value.toLowerCase()) ||
      employee.city.toLowerCase().includes(value.toLowerCase()) ||
      employee.state.toLowerCase().includes(value.toLowerCase()) ||
      employee.startDate.toLowerCase().includes(value.toLowerCase()) ||
      employee.dateOfBirth.toLowerCase().includes(value.toLowerCase())
    );
  });

  return filteredEmployeeList;
}

export function employeeSort(
  employeeList: Array<EmployeesTypes>,
  field: keyof EmployeesTypes,
  order: "asc" | "desc"
) {
  if (order === "asc") {
    employeeList.sort((a, b) => {
      if (typeof a[field] === "number" && typeof b[field] === "number") {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      } else if (typeof a[field] === "string" && typeof b[field] === "string") {
        if (
          (a[field] as string).toLowerCase() <
          (b[field] as string).toLowerCase()
        )
          return -1;
        if (
          (a[field] as string).toLowerCase() >
          (b[field] as string).toLowerCase()
        )
          return 1;
        return 0;
      } else return 0;
    });
  } else if (order === "desc") {
    employeeList.sort((a, b) => {
      if (typeof a[field] === "number" && typeof b[field] === "number") {
        if (a[field] < b[field]) return 1;
        if (a[field] > b[field]) return -1;
        return 0;
      } else if (typeof a[field] === "string" && typeof b[field] === "string") {
        if (
          (a[field] as string).toLowerCase() <
          (b[field] as string).toLowerCase()
        )
          return 1;
        if (
          (a[field] as string).toLowerCase() >
          (b[field] as string).toLowerCase()
        )
          return -1;
        return 0;
      } else return 0;
    });
  }

  return employeeList;
}
