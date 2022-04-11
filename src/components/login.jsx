import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = (props) => {
  const [loginValue, setloginValue] = useState({
    email: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  let navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (loginValue.email === "")
      setValidationMessage("Email should not be blank");
    else if (loginValue.password === "")
      setValidationMessage("Password should not be blank");
    else {
      let validUser = props.users.filter((user) => {
        return (
          user.email == loginValue.email && user.password == loginValue.password
        );
      });

      if (validUser.length > 0) {
        props.OnLoginSession({ userName: loginValue.email });
        navigate("/users");
      } else {
        setValidationMessage("Either email or password is wrong!");
      }
    }
  }

  function OnValueChange(e) {
    setloginValue({ ...loginValue, [e.target.name]: e.target.value });
  }
  return (
    <div className="container p-5">
      <div className="h4 font-weight-bold">LOGIN</div>
      <hr />
      <div className="row">
        <div className="form-group col-1">
          <label>Email</label>
        </div>
        <div className="form-group col-3">
          <input
            type="email"
            name="email"
            className="form-control form-control-sm"
            onChange={OnValueChange}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-1">
          <label>Password</label>
        </div>
        <div className="form-group col-3">
          <input
            type="password"
            name="password"
            className="form-control form-control-sm"
            onChange={OnValueChange}
            required
          />
        </div>
      </div>

      <div className="form-group col-4 text-right">
        <Link
          to="/registration"
          onClick={handleLogin}
          className="btn btn-sm btn-primary"
        >
          Login
        </Link>
      </div>

      <div className="form-group col-4 text-center">
        <label style={{ fontSize: 16, color: "red" }}>
          {validationMessage}
        </label>
      </div>

      <div className="form-group col-4">
        <h6 className="strike">OR</h6>
      </div>
      <div className="form-group col-4 text-center">
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
};

export default Login;
