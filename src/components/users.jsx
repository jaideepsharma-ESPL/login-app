import React, { Component } from "react";

const Users = (props) => {
  const totalUserCount = props.users.length;

  return (
    <div className="container p-5">
      {totalUserCount === 0 ? (
        <p>No Users Exists</p>
      ) : (
        <table className="table table-bordered">
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
      )}
    </div>
  );
};

export default Users;