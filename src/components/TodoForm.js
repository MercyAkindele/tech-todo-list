import { useRef, useEffect, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  //puts focus on the main input bar
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Add your task here"
          value={input}
          required
          onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />
        <button className="todo-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
export default TodoForm;
