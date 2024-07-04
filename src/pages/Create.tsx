import EmployeeForm from "../components/Form/Form";
export default function CreateEmployeePage() {
    return (
        <main className="mx-auto flex w-fit flex-col gap-4 p-2 sm:p-4">
            <h2 className="mb-8 text-center text-xl font-bold">
                Create Employee
            </h2>
            <p>Create a record for a new employee</p>
            <EmployeeForm />
        </main>
    );
}
