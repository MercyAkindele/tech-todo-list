import { useState } from "react";
import { useParams} from "react-router-dom"
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const premadeTodos = require("../preMadeTodoList.json")

function TodoList(props) {
  const { jobId } = useParams();

  const initialTodos = premadeTodos[jobId].todos
  
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    // todo looks like { id: 123, text: "foobar" }
    //ignores empty spaces
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const editTodo = (id, newText) => {
    if (!newText.text || /^\s*$/.test(newText.text)) {
      return;
    }
    setTodos((original) =>
      original.map((item) => (item.id === id ? newText : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What Tech Interview Prep Needs to be Done?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />

      <button>Submit</button>
    </div>
  );
}

export default TodoList;
