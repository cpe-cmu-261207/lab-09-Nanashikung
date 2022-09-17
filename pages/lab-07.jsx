import { useEffect, useState } from "react";
import Todolist from "../components/Todolist";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { themes } from "../libs/theme";
import { ThemeContext } from "../ThemeContext";

import React from "react";
import Navbar from "../components/Navbar";

export default function Lab07() {
  const [todoInput, setTodoInput] = useState("");

  const [isFirstRender, setIsFirstRender] = useState(true);

  const [todos, setTodos] = useState([
    // {
    //   title: "",
    //   completed: false,
    // },
  ]);

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    //!todoStr) setTodos([]
    if (
      todoStr === null //undentifined,null,0,""
    );
    else setTodos(JSON.parse(todoStr));
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const onKeyUpHandler = (event) => {
    if (event.key !== "Enter") return;
    if (event.target.value === "") alert("Todo cannot be empty");
    else {
      const newTodos = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodos);
      setTodoInput("");
    }
  };

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todosStr);
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };
  const [selTheme, setSelTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (selTheme.name == "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  return (
    <div
      class="my-5 mx-auto px-5 rounded-3"
      style={{
        maxWidth: "1200px",
        fontFamily: "Prompt",
        fontSize: "36px",
        color: selTheme.foreground,
        backgroundColor: selTheme.background,
      }}
    >
      <Navbar />
      <div style={{ backgroundColor: selTheme.background, minHeight: "" }}>
        {/* Entire App container (required for centering) */}

        <ThemeContext.Provider value={{ selTheme, toggleTheme }}>
          <div style={{ maxWidth: "700px" }} className="mx-auto">
            {/* App header */}
            <p
              className="display-4 text-center fst-italic p-4"
              style={{ color: selTheme.foreground }}
            >
              Minimal Todo List <span className="fst-normal">☑️</span>
            </p>
            {/* Input */}
            <div className="d-flex align-items-center gap-2">
              <input
                className="form-control mb-1 fs-4"
                placeholder="insert todo here..."
                onChange={(e) => setTodoInput(e.target.value)}
                value={todoInput}
                onKeyUp={onKeyUpHandler}
              />
              <button className="btn btn-dark" onClick={toggleTheme}>
                {selTheme.name === "light" && <IconSunHigh />}
                {selTheme.name === "dark" && <IconMoon />}
              </button>
            </div>

            {/* Todos */}

            {todos.map((todo, i) => (
              <Todolist
                title={todo.title}
                completed={todo.completed}
                key={i}
                onDelete={() => deleteTodo(i)}
                onMark={() => markTodo(i)}
                onArrowUp={() => moveUp(i)}
                onArrowDown={() => moveDown(i)}
              />
            ))}

            {/* summary section */}
            <p className="text-center fs-4">
              <span className="text-primary">All ({todos.length}) </span>
              <span className="text-warning">
                Pending ({todos.filter((x) => x.completed === false).length}){" "}
              </span>
              <span className="text-success">
                Completed ({todos.filter((x) => x.completed === true).length})
              </span>
            </p>
            {/* Made by section */}
          </div>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}
