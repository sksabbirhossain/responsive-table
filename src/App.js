import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [order, setOrder] = useState("asc");
  useEffect(() => {
    //fetch data
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        //get data by asc and desc order
        if (order === "desc") {
          const result = data.sort((a, b) => a.id.localeCompare(b.id));
          return setUserData(result);
        } else {
          return setUserData(data);
        }
      });
  }, [order]);
  return (
    <div className="container-fluid">
      <div className="my-4">
        <h2>Data Table</h2>
      </div>
      <div className="table-responsive" id="tableData">
        {/* sort data table select box */}
        <select
          className="mb-3 mb-md-0"
          name="order"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Sort by ASC</option>
          <option value="desc">Sort by DESC</option>
        </select>

        <table className="table table-striped table-sm table-primary">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">first_name</th>
              <th scope="col">last_name</th>
              <th scope="col">email</th>
              <th scope="col">gender</th>
              <th scope="col">ip_address</th>
              <th scope="col">airport code</th>
              <th scope="col">time</th>
              <th scope="col">status</th>
              <th scope="col">mobile</th>
              <th scope="col">area</th>
              <th scope="col">show</th>
              <th scope="col">edit</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data) => (
              <tr
                className={
                  data.status === "true" ? "table-success" : "table-danger"
                }
                key={data.id}
              >
                <td data-title="id">{data.id}</td>
                <td data-title="first_name">{data.first_name}</td>
                <td data-title="last_name">{data.last_name}</td>
                <td data-title="email">{data.email}</td>
                <td data-title="gender">{data.gender}</td>
                <td data-title="ip_address">{data.ip_address}</td>
                <td data-title="airport code">{data.airport_code}</td>
                <td data-title="time">{data.time}</td>
                <td data-title="status">{data.status}</td>
                <td data-title="mobile">{data.mobile}</td>
                <td data-title="area">{data.area}</td>
                <td data-title="show">{data.show}</td>
                <td data-title="edit">{data.edit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
