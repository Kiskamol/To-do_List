import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, status]);

  return (
    <div className="App" style={{border: 'green'}}>
      <header>
        <h1><span>T</span><span>O</span><span>-</span> <span>D</span><span>O</span> List</h1>
      </header>
      <Form
        todos={todos}
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
