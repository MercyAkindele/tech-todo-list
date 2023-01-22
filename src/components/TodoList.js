import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom"
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const premadeTodos = require("../preMadeTodoList.json")

export async function loader({ params }) {
  const jobId = params.jobId;
  return premadeTodos[jobId] ? premadeTodos[jobId].todos : [];
}

function TodoList() {
 
  const { jobId } = useParams();

  const jobName = premadeTodos[jobId] ? premadeTodos[jobId].name : null;
  console.log(jobName);    // minor issue, this is being assigned six times after the link click

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, [jobId]);

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
    <div className="container">
      <div className="row">
        <div className="col col-lg-12 border-light rounded">
          <div className="border-bottom border-secondary-subtle">
            <h3 className="py-2">{jobName}</h3>
          </div>
          <div className="border-bottom border-secondary-subtle">
            <h3 className="pt-2">Latest Job Activity</h3>
            <ul className="pb-2">
              <li>Application submitted</li>
            </ul>
          </div>
          <div>
            <h3 className="pt-2">Activity checklist</h3>
            <h4 className="pt-2">LinkedIn</h4>
            <ul>
              <li onClick={() => completeTodo()}>connect with recruiter</li>
              <li onClick={completeTodo}>message recruiter</li>
              <li onClick={completeTodo}>follow company</li>
            </ul>
          </div>
          <div>
            <h4 className="pt-2">Follow up</h4>
            <ul>
              <li>phone call with recruiter</li>
              <li>email recruiter</li>
              <li>text recruiter</li>
            </ul>
          </div>
          <div>
            <h4 className="pt-2">Additional resources</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h4>What Tech Interview Prep Needs to be Done?</h4>
            <TodoForm onSubmit={addTodo} />
            <Todo
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </div>
            <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
