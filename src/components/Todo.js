import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Todo({
  todos,
  completeTodo,
  removeTodo,
  startEditTodo,
  saveEditTodo,
}) {

  const initialTodoTexts = {}
  todos.forEach((todo) => { initialTodoTexts[todo.id] = todo.text });
  const [todoTexts, setTodoTexts] = useState(initialTodoTexts);

  function renderNormal(todo) {
    return (
      <>
        <div className="d-flex justify-content-between">
        <div className="py-2" key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons d-flex py-2">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon mx-5"
          />
          <TiEdit
            className="edit-icon"
            onClick={() => startEditTodo(todo.id)}
          />
        </div>
        </div>
      </>
    );
  }

  function updateTodoText(id, newText) {
    let newTodoTexts = {...todoTexts}
    newTodoTexts[id] = newText
    setTodoTexts(newTodoTexts)
  }

  function renderEdit(todo) {
    return (
      <>
        <div className="d-flex py-2">
        <div key={todo.id}>
          <input
            defaultValue={todo.text}
            onChange={(e) => updateTodoText(todo.id, e.target.value)}
          />
        </div>
        <div className="icons">
          <AiOutlineCheckCircle
            onClick={() => saveEditTodo(todo.id, todoTexts[todo.id])}
            className="save-icon"
          />
        </div>
        </div>
      </>
    );
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      {todo.isEditing ? renderEdit(todo) : renderNormal(todo)}
    </div>
  ));
}

export default Todo;