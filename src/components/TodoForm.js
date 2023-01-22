import { useRef, useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import Todo from "./Todo";

function TodoForm(props) {
  const initialTodos = useLoaderData() || [];
  const { jobId } = props;

  const initialFormState = {
    company_name: "",
    todos: [...initialTodos],
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    const newFormData = {
      ...formData,
      todos: initialTodos,
    };
    setFormData(newFormData);
  }, [jobId]);

  const handleCompanyNameChange = (e) => {
    const newFormData = {
      ...formData,
      company_name: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodoclickHandler = (e) => {
    e.preventDefault();
    if (!todoInput || /^\s*$/.test(todoInput)) {
      return;
    }

    let newestFormData = {
      ...formData,
      todos: [
        ...formData.todos,
        { id: Math.floor(Math.random() * 10000), text: todoInput },
      ],
    };
    setFormData(newestFormData);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.onSubmit({
  //     id: Math.floor(Math.random() * 10000),
  //     text: todoInput,
  //   });
  //   setTodoInput("");
  // };

  const completeTodo = (id) => {
    let updatedTodos = formData.todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    let newestFormData = {
      ...formData,
      todos: updatedTodos,
    };
    setFormData(newestFormData);
  };

  const removeTodo = (id) => {
    const removeArr = [...formData.todos].filter((todo) => todo.id !== id);

    let newestFormData = {
      ...formData,
      todos: removeArr,
    };
    setFormData(newestFormData);
  };

  const startEditTodo = (id) => {
    let updatedTodos = formData.todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });

    let newestFormData = {
      ...formData,
      todos: updatedTodos,
    };
    setFormData(newestFormData);
  };

  const saveEditTodo = (id, newText) => {
    if (!newText || /^\s*$/.test(newText)) {
      return;
    }

    let updatedTodos = formData.todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
        todo.text = newText
      }
      return todo;
    });

    let newestFormData = {
      ...formData,
      todos: updatedTodos,
    };
    setFormData(newestFormData);
  };

  function formSubmitHandler(e) {
    e.preventDefault();

    console.log("formData", formData);
    console.log("JSON.stringify(formData)", JSON.stringify(formData));
  }

  return (
    <>
      <form className="todo-form" onSubmit={formSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company_name}
            onChange={handleCompanyNameChange}
            required
            name="company_name"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add your task here"
            value={todoInput}
            onChange={handleChange}
            name="todo_to_add"
            className="todo-input"
          />
          <button className="todo-button" onClick={addTodoclickHandler}>
            Add
          </button>
        </div>
        <button>Submit</button>
      </form>
      <Todo
        todos={formData.todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        startEditTodo={startEditTodo}
        saveEditTodo={saveEditTodo}
      />
    </>
  );
}

export default TodoForm;