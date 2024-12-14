import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { FormattedMessage } from "react-intl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "abc",
      password: "123",
      isShowPassword: false,
    };
  }

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = () => {
    console.log(this.state.email);
    console.log(this.state.password);
  };

  showHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setEmail(e);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="custom-input-password">
                  <Form.Control
                    type={this.state.isShowPassword ? "text" : "password"}
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setPassword(e);
                    }}
                    required
                  />
                  <span
                    onClick={() => {
                      this.showHidePassword();
                    }}
                  >
                    <i
                      className={
                        this.state.isShowPassword
                          ? "fas fa-eye"
                          : "fas fa-eye-slash"
                      }
                    ></i>
                  </span>
                </div>
              </Form.Group>

              <Button
                variant="primary"
                className="w-100"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default Login;
