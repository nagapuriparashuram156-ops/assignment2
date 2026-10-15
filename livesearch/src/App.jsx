
import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const names = [
    "Rahul",
    "Priya",
    "Arjun",
    "Sneha",
    "Kiran",
    "Anjali",
    "Ravi",
    "Divya",
    "Vijay",
    "Meena"
  ];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Live Search Box</h1>

      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {filteredNames.length === 0 && <p>No names found</p>}
    </div>
  );
}

export default App;
