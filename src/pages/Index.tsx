import Datatable from "../components/Datatable/Datatable";
import { EmployeesTypes } from "../types/EmployeeTypes";
import {useDispatch, useSelector} from "react-redux";
import {deleteRow} from "../features/dataTable";

export default function Home() {
  const employeeList = useSelector((state: any) => state.dataTable);

  const headers = [
    { title: "First Name", sortText: "firstName" },
    { title: "Last Name", sortText: "lastName" },
    { title: "Start Date", sortText: "startDate" },
    { title: "Department", sortText: "departmentName" },
    { title: "Date of Birth", sortText: "birthDate" },
    { title: "Street", sortText: "streetAddress" },
    { title: "City", sortText: "cityName" },
    { title: "State", sortText: "stateName" },
    { title: "Postal Code", sortText: "postalCode" },
  ] as Array<{ title: string; sortText: keyof EmployeesTypes }>;

  const dispatch = useDispatch();

  return (
    <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 p-4">
      <h2 className="mb-8 text-center text-xl font-bold">Current Employees</h2>
      <p>List of all the currently registered employees</p>
      <Datatable
        data={employeeList}
        onAction={e => dispatch(deleteRow({id: e}))}
        columns={headers}
        paginationOptions={[5, 10, 20, 50]}
      />
    </main>
  );
}
