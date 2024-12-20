import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { getAllUsers } from "../../services/userService";

import "./UserManage.scss";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    try {
      let response = await getAllUsers("ALL");
      if (response && response.status === 200) {
        this.setState({
          arrUsers: response.data.users,
        });
      } else {
        console.error(`Failed to fetch users: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error in fetching users:", error);
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
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
                  arrUsers.map((item, index) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <tr className="div-class">
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
                    );
                  })}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
export default UserManage;
