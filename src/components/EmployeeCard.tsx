type EmployeeCardProps = {
  name: string;
  employeeId: string;
  department: string;
  salary: number;
};

export default function EmployeeCard({
  name,
  employeeId,
  department,
  salary,
}: EmployeeCardProps) {
  return (
    <article style={{ border: "1px solid gray", padding: "16px", margin: "12px" }}>
      <h2>{name}</h2>
      <p>Employee ID: {employeeId}</p>
      <p>Department: {department}</p>
      <p>Salary: ₹{salary}</p>
    </article>
  );
}