import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="my-4">
        <h2>Data Table</h2>
      </div>
      <div className="table-responsive" id="tableData">
        <table class="table">
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
            <tr className="table-danger">
              <td data-title="id">1</td>
              <td data-title="first_name">Mark</td>
              <td data-title="last_name">Mark</td>
              <td data-title="email">sksabbirhossain4@gmail.com</td>
              <td data-title="gender">Mark</td>
              <td data-title="ip_address">Mark</td>
              <td data-title="airport code">Mark</td>
              <td data-title="time">Mark</td>
              <td data-title="status">Mark</td>
              <td data-title="mobile">Mark</td>
              <td data-title="area">Mark</td>
              <td data-title="show">Mark</td>
              <td data-title="edit">Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
