import React, { Component, useState } from "react";

const TodoList = () => {
  const [txtTodo, settxtTodo] = useState("");
  const [txtListTodo, settxtListTodo] = useState([]);
  const onClickSave = () => {
    settxtListTodo([...txtListTodo, txtTodo]);
  };
  return (
    <div className="container p-5">
      <input
        name="txt_todo"
        value={txtTodo}
        type="text"
        onChange={(e) => {
          settxtTodo(e.target.value);
        }}
      />
      <button className="btn btn-sm btn-primary" onClick={onClickSave}>
        Add
      </button>

      <div className="form-group">
        <ul>
          {txtListTodo.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
