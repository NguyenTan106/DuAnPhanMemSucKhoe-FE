import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { handleLogin } from "../../services/userService";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
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

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLogin(this.state.email, this.state.password);
      if (data.data && data.data.errCode !== 0) {
        this.setState({
          errMessage: data.data.errMessage,
        });
      }
      if (data.data && data.data.errCode === 0) {
        console.log("login succeed!");
      }
    } catch (error) {
      if (error.response.data) {
        this.setState({
          errMessage: error.response.data.errMessage,
        });
      }
    }
  };

  handleCreateNewUser = () => {};
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
              <div style={{ color: "red" }}>{this.state.errMessage}</div>

              <Button
                variant="primary"
                className="w-100 my-2"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </Button>
              <div style={{ textAlign: "center" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="/register"
                  onClick={() => this.handleCreateNewUser()}
                >
                  Sign up
                </a>
              </div>
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
