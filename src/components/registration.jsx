import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Registration = (props) => {
  let txtName = React.createRef();
  let txtEmail = React.createRef();
  let txtPassword = React.createRef();
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const name = txtName.current.value;
    const email = txtEmail.current.value;
    const password = txtPassword.current.value;
    if (name !== "" || email !== "" || password !== "") {
      props.OnSaveUserData({
        name: name,
        email: email,
        password: password,
      });
    }
    navigate("/");
  }

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div className="h4 font-weight-bold">REGISTRATION</div>
        <hr />
        <div className="row">
          <div className="form-group col-1">
            <label>Name</label>
          </div>
          <div className="form-group col-3">
            <input
              type="text"
              name="txtName"
              className="form-control form-control-sm"
              ref={txtName}
              required
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-1">
            <label>Email</label>
          </div>
          <div className="form-group col-3">
            <input
              name="txtEmail"
              type="email"
              className="form-control form-control-sm"
              ref={txtEmail}
              required
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-1">
            <label>Password</label>
          </div>
          <div className="form-group col-3">
            <input
              type="password"
              name="txtPassword"
              className="form-control form-control-sm"
              ref={txtPassword}
              required
            ></input>
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-sm btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
