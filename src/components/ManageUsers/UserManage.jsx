import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { getAllUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";

import "./UserManage.scss";

const UserManage = () => {
  const [arrUsers, setArrUsers] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    // let session = sessionStorage.getItem("account");
    // if (!session) {
    //   history("/");
    // }
    const fetchUsers = async () => {
      try {
        let response = await getAllUsers("ALL");
        if (response && response.status === 200) {
          setArrUsers(response.data.users);
        } else {
          console.error(`Failed to fetch users: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error in fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // [] ensures the effect runs only once after the component mounts.

  return (
    <div className="user-container container py-2">
      <div className="title text-center fs-3 fw-bold mb-4">Manage Users</div>
      <div className="user-table">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers &&
                arrUsers.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.role_name}</td>
                    <td>
                      <button className="btn-edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default UserManage;
