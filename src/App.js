import { useState, useEffect } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function App() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "WorkspaceId",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Registration_Key",
      selector: (row) => row.registration_key,
      sortable: true,
    },
  ];

  const data = [
    {
      name: "ankit",
      _id: 1,
      registration_key: "any",
    },
    {
      name: "ankit12",
      _id: 2,
      registration_key: "any",
    },
  ];

  const [records, setRecords] = useState(data);

  function handlefilter(event) {
    const newData = records.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  console.log(records);

  useEffect(() => {
    fetch("http://localhost:3000/workspace")
      .then((response) => response.json())
      .then((json) => setRecords(json));
  }, []);

  return (
    <div>
      <h1>workspaces</h1>
      <div className="any">
        <input type="text" onChange={handlefilter} />
      </div>
      <Link to="/create"><div className="btn">
        <button>Create New</button>
      </div>
      </Link>
      <div className="dataTable">
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </div>
  );
}

export default App;
