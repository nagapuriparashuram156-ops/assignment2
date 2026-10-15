
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", subject: "Mathematics", marks: 92 },
    { id: 2, name: "Priya", subject: "Science", marks: 85 },
    { id: 3, name: "Arjun", subject: "English", marks: 45 },
    { id: 4, name: "Sneha", subject: "Mathematics", marks: 78 },
    { id: 5, name: "Kiran", subject: "Science", marks: 88 }
  ]);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("Mathematics");
  const [marks, setMarks] = useState("");

  function addStudent(event) {
    event.preventDefault();

    const score = Number(marks);

    if (!name.trim() || marks === "" || score < 0 || score > 100) {
      alert("Enter a name and marks between 0 and 100.");
      return;
    }

    setStudents([
      ...students,
      {
        id: Date.now(),
        name: name.trim(),
        subject,
        marks: score
      }
    ]);

    setName("");
    setMarks("");
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  const average = students.length
    ? (
        students.reduce((sum, student) => sum + student.marks, 0) /
        students.length
      ).toFixed(1)
    : "0.0";

  const passed = students.filter((student) => student.marks >= 40).length;

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Student Marks Management</h1>
          <p>Manage student records and academic performance</p>
        </div>
        <span className="badge">Admin Panel</span>
      </header>

      <section className="stats">
        <div className="stat-card">
          <p>Total Students</p>
          <h2>{students.length}</h2>
        </div>
        <div className="stat-card">
          <p>Average Marks</p>
          <h2>{average}%</h2>
        </div>
        <div className="stat-card">
          <p>Passed Students</p>
          <h2>{passed}</h2>
        </div>
        <div className="stat-card">
          <p>Failed Students</p>
          <h2>{students.length - passed}</h2>
        </div>
      </section>

      <section className="panel">
        <h2>Add Student</h2>
        <form className="student-form" onSubmit={addStudent}>
          <input
            type="text"
            placeholder="Student name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>Computer Science</option>
          </select>

          <input
            type="number"
            placeholder="Marks (0-100)"
            min="0"
            max="100"
            value={marks}
            onChange={(event) => setMarks(event.target.value)}
            required
          />

          <button type="submit">Add Student</button>
        </form>
      </section>

      <section className="panel">
        <h2>Student Records</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.subject}</td>
                  <td>{student.marks}/100</td>
                  <td>
                    <span
                      className={
                        student.marks >= 40 ? "passed-tag" : "failed-tag"
                      }
                    >
                      {student.marks >= 40 ? "Pass" : "Fail"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td colSpan="6">No student records available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <footer>Student Marks Management System</footer>
    </div>
  );
}

export default App;
