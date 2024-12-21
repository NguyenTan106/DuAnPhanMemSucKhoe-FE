import React, { useState } from "react";
import { handleLogin } from "../../services/userService";
import "./Login.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleLoginSubmit = async () => {
    setErrMessage("");
    try {
      let data = await handleLogin(email, password);
      if (data.data && data.data.errCode !== 0) {
        setErrMessage(data.data.errMessage);
      } else if (data.data && data.data.errCode === 0) {
        console.log("login succeed!");
        // Điều hướng sang trang khác nếu cần
        window.location.href = "/home";
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrMessage(error.response.data.errMessage);
      }
    }
  };

  const handleCreateNewUser = () => {
    window.location.href = "/register";
  };

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="custom-input-password">
                <Form.Control
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span onClick={toggleShowPassword}>
                  <i
                    className={
                      isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </Form.Group>

            {/* Error Message */}
            <div style={{ color: "red" }}>{errMessage}</div>

            {/* Login Button */}
            <Button
              variant="primary"
              className="w-100 my-2"
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </Form>

          {/* Sign Up Link */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => handleCreateNewUser()}
            >
              Sign up
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
