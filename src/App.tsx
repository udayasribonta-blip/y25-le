import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./data/employees";

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  const filteredEmployees =
    selectedDepartment === "All"
      ? employees
      : employees.filter(
          (employee) => employee.department === selectedDepartment
        );

  return (
    <main>
      <h1>Employee Directory</h1>

      {departments.map((department) => (
        <button
          key={department}
          onClick={() => setSelectedDepartment(department)}
          style={{ margin: "5px", padding: "10px" }}
        >
          {department}
        </button>
      ))}

      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          employeeId={employee.id}
          department={employee.department}
          salary={employee.salary}
        />
      ))}
    </main>
  );
}

export default App;