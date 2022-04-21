import React, { Component } from "react";
import { Link } from "react-router-dom";

const Users = (props) => {
  const totalUserCount = props.users.length;
  console.log(props);

  return (
    <div className="container-fuild p-5">
      <header>
        <div className="row">
          <div className="form-group col-6">
            <h4 className="font-weight-bold">USERS LIST</h4>
          </div>
          <div className="form-group col-6  text-right">
            <p>
              <b>Logged by :</b> {props.loginSession.userName}
              {/* <Link to="/" onClick={props.clearSession()}>
                Log out
              </Link> */}
            </p>
            <p>
              <b>Logged At :</b> {props.loginSession.loggedAt}
            </p>
          </div>
        </div>
      </header>
      <hr />

      {totalUserCount === 0 ? (
        <p>No Users Exists</p>
      ) : (
        <div className="form-group row col-6">
          <h6 className="form-group">Total Users - {totalUserCount}</h6>
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map((user, i) => (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
