import "./Register.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { registerNewUser } from "../../services/userService";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [roleId, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [pass_repeat, setRepeatPass] = useState("");

  useEffect(() => {
    // axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
    //   console.log(">>> check data: ", data);
    // });
  }, []);

  // let history = useHistory();
  // const handleLogin = () => {
  //   history.push("/login");
  // };
  const isValidInputs = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!name) {
      toast.error("Name is required");
      return false;
    }
    if (!age || isNaN(age)) {
      toast.error("Please enter a valid age");
      return false;
    }
    if (!gender) {
      toast.error("Gender is required");
      return false;
    }
    if (!roleId) {
      toast.error("Role is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password !== pass_repeat) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    let check = isValidInputs();

    if (check === true) {
      let response = await registerNewUser(
        email,
        name,
        age,
        gender,
        password,
        roleId
      );
      let serverData = response.data;
      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
        window.location.href = "/login";
      } else {
        toast.error(serverData.EM);
      }
    }
  };
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="age">
          <b>Age</b>
        </label>
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />

        <label htmlFor="gender">
          <b>Gender</b>
        </label>
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="roleId">
          <b>Gender</b>
        </label>
        <select
          name="roleId"
          id="roleId"
          value={roleId}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="1">admin</option>
          <option value="2">user</option>
        </select>
        <div></div>
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <label htmlFor="pass_repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="pass_repeat"
          id="pass_repeat"
          value={pass_repeat}
          onChange={(event) => setRepeatPass(event.target.value)}
          required
        />
        <hr />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>

        <button
          type="submit"
          className="registerbtn"
          onClick={() => {
            handleRegister();
          }}
        >
          Register
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a href="/login">Sign in</a>.
        </p>
      </div>
    </>
  );
};

export default Register;
