import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos ,borderColor}) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              todo={todo}
              borderColor={borderColor}
              setTodos={setTodos}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todolist;
