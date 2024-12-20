import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import TableUsers from "./components/TableUsers";
import UserManage from "./containers/System/UserManage";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Navigation /> */}
        <Switch>
          <Route path="/home">
            <UserManage />
          </Route>
          <Route path="/about">about</Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
