/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const TableComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("errror in fetching data", error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User details table</h1>
      <table
        style={{
          borderCollapse: "collapse",
          margin: "auto",
          width: "60%",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr
            style={{
              border: "1px solid #ddd",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((item) => (
              <tr
                style={{
                  border: "1px solid #ddd",
                  backgroundColor: "gray",
                  color: "white",
                }}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
