
import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Rahul", course: "CSE", marks: 92, status: "Passed" },
    { id: 2, name: "Priya", course: "ECE", marks: 85, status: "Passed" },
    { id: 3, name: "Arjun", course: "CSE", marks: 45, status: "Failed" },
    { id: 4, name: "Sneha", course: "IT", marks: 78, status: "Passed" },
    { id: 5, name: "Kiran", course: "EEE", marks: 88, status: "Passed" }
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>MyDashboard</h2>
        <nav>
          <a className="active" href="#home">Dashboard</a>
          <a href="#students">Students</a>
          <a href="#reports">Reports</a>
          <a href="#settings">Settings</a>
        </nav>
      </aside>

      <main className="main-content" id="home">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here is your overview.</p>
          </div>
          <div className="profile">Admin</div>
        </header>

        <section className="cards">
          <div className="card blue">
            <p>Total Students</p>
            <h2>1,250</h2>
            <span>Registered students</span>
          </div>

          <div className="card green">
            <p>Courses</p>
            <h2>24</h2>
            <span>Available courses</span>
          </div>

          <div className="card orange">
            <p>Average Marks</p>
            <h2>77.6%</h2>
            <span>Overall performance</span>
          </div>

          <div className="card purple">
            <p>Attendance</p>
            <h2>92%</h2>
            <span>Overall attendance</span>
          </div>
        </section>

        <section className="table-section" id="students">
          <div className="section-heading">
            <h2>Student Details</h2>
            <button onClick={() => window.print()}>
              Print Report
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Marks</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.marks}</td>
                    <td>
                      <span
                        className={`status ${
                          student.status === "Passed"
                            ? "passed"
                            : "failed"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer>
          © 2026 MyDashboard | Student Management System
        </footer>
      </main>
    </div>
  );
}

export default App;
