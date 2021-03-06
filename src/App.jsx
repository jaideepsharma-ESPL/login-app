import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Registration from "./components/registration";
import Users from "./components/users";

class App extends React.Component {
  state = {
    users: [],
  };

  OnSaveUserData = ({ name, email, password }) => {
    let time = new Date(Date.now());
    let timeStr =
      time.getDate().toString() +
      "-" +
      time.getMonth().toString() +
      "-" +
      time.getFullYear() +
      " " +
      time.getHours().toString() +
      ":" +
      time.getMinutes().toString() +
      ":" +
      time.getSeconds().toString();
    let newUsers = [
      ...this.state.users,
      {
        name: name,
        email: email,
        password: password,
        RegisteredOn: timeStr,
      },
    ];
    this.setState({ users: newUsers });
  };

  render() {
    return (
      <div className="Container">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                users={this.state.users}
                OnLoginSession={this.OnLoginSession}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <Registration
                users={this.state.users}
                OnSaveUserData={this.OnSaveUserData}
              />
            }
          />
          <Route path="/users" element={<Users users={this.state.users} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
