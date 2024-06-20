import { useRef, useState } from "react";

import Datatable from "../components/Datatable/Datatable";

import { EmployeesTypes } from "../types/EmployeeTypes";

export default function Home() {
  const storedEmployeeList: Array<EmployeesTypes> = JSON.parse(
    localStorage.getItem("employee") || "[]"
  );
  const [employeeList, setEmployeeList] =
    useState<Array<EmployeesTypes>>(storedEmployeeList);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const headers = [
    { title: "First Name", sortText: "firstName" },
    { title: "Last Name", sortText: "lastName" },
    { title: "Start Date", sortText: "startDate" },
    { title: "Department", sortText: "department" },
    { title: "Date of Birth", sortText: "dateOfBirth" },
    { title: "Street", sortText: "street" },
    { title: "City", sortText: "city" },
    { title: "State", sortText: "state" },
    { title: "Zip", sortText: "zip" },
  ] as Array<{ title: string; sortText: keyof EmployeesTypes }>;

  function handleDeleteEmployee(id: string) {
    const newEmployeeList = employeeList.filter(
      (employee) => employee.id !== id
    );

    localStorage.setItem("employee", JSON.stringify(newEmployeeList));
    setEmployeeList(newEmployeeList);

    modalRef.current?.showModal();
  }

  return (
    <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 p-4">
      <h2 className="mb-8 text-center text-xl font-bold">Current Employees</h2>
      <p>List of all the currently registered employees</p>
      <Datatable
        data={employeeList}
        onAction={handleDeleteEmployee}
        columns={headers}
        paginationOptions={[5, 10, 20, 50]}
      />
    </main>
  );
}
