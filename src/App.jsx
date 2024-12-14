import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import UserManage from "./containers/System/UserManage";
import Login from "./containers/Auth/Login";
import "./App.scss";

function App() {
  return (
    <>
      <Header></Header>
      <UserManage></UserManage>
      <Login></Login>
      {/* <TableUsers></TableUsers> */}
    </>
  );
}

export default App;
